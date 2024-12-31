// FeaturedJobsSection.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoryFilter from './src/components/CategoryFilter';
import { FeaturedJobCard } from './src/components/FeaturedJobCard';
import { JobSkeletonLoader } from './src/components/JobSkeletonLoader';
import { BACKENDURL } from "@env" 
import "./global.css"
import CategorySkeloton from './src/components/CategorySkeleton';
import StaticDesign from './src/components/StaticDesign';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  featured: boolean;
  categoryId: number;
}

const App: React.FC = () => {
  const baseURL: string = BACKENDURL;
  const [jobs, setJobs] = useState<Job[]>([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
    fetchJobs();
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${baseURL}/api/categories`);
      let data = await response.json();
      data = [{name: 'All', id: 0}, ...data]
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${baseURL}/api/jobs/featured?category=${selectedCategory}`
      );
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (jobId: number) => {
    try {
      await fetch(`${baseURL}/api/jobs/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobId }),
      });
      // Handle success (e.g., show success message)
    } catch (error) {
      console.error('Error applying to job:', error);
    }
  };

  return (
    <View className="p-4 h-[100%] pt-16 bg-[#111111]">
      <StaticDesign username={'Alfiya'} location={'Mumbai'}/>
      <View className="mb-4">
        {loading ? (
        <CategorySkeloton />
      ) : (
         <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      )} 
      </View>
      <View className='flex-row justify-between items-center'>
      <Text className="text-2xl font-bold text-white mb-2">
          Featured Jobs 
        </Text>
        <Text className='text-xs text-white font-thin'>Last updated: 2 hours ago</Text>
      </View>
      

 <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-2 py-4"
        >
 {loading ? (
        <JobSkeletonLoader />
      ) : (
        jobs.map((job) => (
          <FeaturedJobCard
            key={job.id}
            {...job}
            onApply={handleApply}
          />
        ))
      )} 
        </ScrollView>
      
    </View>
  );
};


export default App

// FeaturedJobsSection.tsx
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import CategoryFilter from './src/components/CategoryFilter';
import { FeaturedJobCard } from './src/components/FeaturedJobCard';
import { JobSkeletonLoader } from './src/components/JobSkeletonLoader';
import Config from 'react-native-config';

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
  const baseURL:string = Config.BACKENDURL;
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
      const data = await response.json();
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
    <View className="p-4">
      <View className="mb-4">
        <Text className="text-2xl font-bold text-white mb-4">
          Featured Jobs
        </Text>
         <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        /> 
      </View>

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
    </View>
  );
};


export default App

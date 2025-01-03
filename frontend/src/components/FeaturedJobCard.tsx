import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface JobProps {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  featured: boolean;
  onApply: (jobId: number) => void;
}

export const FeaturedJobCard: React.FC<JobProps> = ({
  id,
  title,
  company,
  location,
  salary,
  featured,
  onApply,
}) => {
  return (
    <View className="w-[85vw] max-h-[35vh] rounded-2xl p-4 m-4 mx-2 bg-[#7C3AED]">
      <View className="flex-row justify-between items-start mb-">
        <View className="w-12 h-12 bg-white rounded-full justify-center items-center">
          <Text className="text-purple-600 text-xl">
            {company.charAt(0)}
          </Text>
        </View>
        <View className="mx-3">
        <Text className="w-36 text-white text-xl font-bold mb-1">{title}</Text>
        <Text className="w-36 text-white/80 mb-4">{company}, {location}</Text>
        </View>
        {featured && (
          <View className="bg-white/20 px-3 py-1 rounded-full">
            <Text className="text-white text-xs">Featured</Text>
          </View>
        )}
      </View>
      
      <Text className="text-white text-lg font-semibold mb-4">{salary}</Text>
      
      <TouchableOpacity
        onPress={() => onApply(id)}
        className="bg-white rounded-full py-3 px-6 items-center"
      >
        <Text className="text-purple-600 font-semibold">Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

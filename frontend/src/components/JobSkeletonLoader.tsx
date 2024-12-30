import React from 'react';
import { View } from 'react-native';

export const JobSkeletonLoader: React.FC = () => {
  return (
    <View className="rounded-2xl p-4 mb-4 bg-gray-800">
      <View className="flex-row justify-between items-start mb-4">
        <View className="w-12 h-12 bg-gray-700 rounded-full" />
        <View className="w-20 h-6 bg-gray-700 rounded-full" />
      </View>
      
      <View className="w-3/4 h-6 bg-gray-700 rounded mb-2" />
      <View className="w-1/2 h-4 bg-gray-700 rounded mb-4" />
      
      <View className="w-1/3 h-4 bg-gray-700 rounded mb-4" />
      
      <View className="w-full h-12 bg-gray-700 rounded-full" />
    </View>
  );
};

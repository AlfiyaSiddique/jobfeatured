import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';


const CategorySkeloton = () => {
    const categories = ["","","",""]
    return (
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-2 py-4"
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              className={`px-6 mx-2 py-2 rounded-full bg-gray-500`}
            >
              
            </TouchableOpacity>
          ))}
        </ScrollView>
      );
}

export default CategorySkeloton

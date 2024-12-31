import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';

interface Category {
  id: number;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({categories, selectedCategory, onSelectCategory }) => {
    return (
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-2 py-4"
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => onSelectCategory(category.name)}
              className={`px-6 mx-2 py-2 rounded-full ${
                selectedCategory === category.name
                  ? 'bg-[#7C3AED]'
                  : 'bg-gray-800'
              }`}
            >
              <Text
                className={`text-sm ${
                  selectedCategory === category.name
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      );
}

export default CategoryFilter

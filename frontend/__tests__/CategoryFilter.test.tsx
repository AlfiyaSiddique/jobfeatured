import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import  CategoryFilter  from '../src/components/CategoryFilter';

describe('CategoryFilter', () => {
  const mockCategories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Acting' },
    { id: 3, name: 'Photography' },
  ];

  it('renders all categories', () => {
    const { getAllByRole } = render(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory="All"
        onSelectCategory={() => {}}
      />
    );
    
    expect(getAllByRole('button')).toHaveLength(mockCategories.length);
  });

  it('highlights selected category', () => {
    const { getByText } = render(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory="Acting"
        onSelectCategory={() => {}}
      />
    );
    
  });
});


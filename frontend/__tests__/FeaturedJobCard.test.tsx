import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { FeaturedJobCard } from '../src/components/FeaturedJobCard';

describe('FeaturedJobCard', () => {
  const mockJob = {
    id: 1,
    title: 'Lead Actor',
    company: 'FilmCity',
    location: 'Hyderabad',
    salary: 'Rs. 3,000/day',
    featured: true,
  };

  it('renders job details correctly', () => {
    const { getByText } = render(
      <FeaturedJobCard {...mockJob} onApply={() => {}} />
    );
    
    expect(getByText(mockJob.title)).toBeTruthy();
    expect(getByText(mockJob.company)).toBeTruthy();
    expect(getByText(mockJob.location)).toBeTruthy();
    expect(getByText(mockJob.salary)).toBeTruthy();
  });

  it('shows featured badge when job is featured', () => {
    const { getByText } = render(
      <FeaturedJobCard {...mockJob} onApply={() => {}} />
    );
    
    expect(getByText('Featured')).toBeTruthy();
  });
});

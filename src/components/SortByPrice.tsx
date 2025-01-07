import React from 'react';
import { Select } from '@mantine/core';
import { IconFilter } from '@tabler/icons-react';  // Import the icon

interface SortByPriceProps {
  onSortChange: (sortOrder: 'asc' | 'desc') => void;
}

export function SortByPrice({ onSortChange }: SortByPriceProps) {
  return (
    <Select
      label="Sort by Price"
      placeholder="Choose sorting option"
      onChange={(value) => onSortChange(value === 'asc' ? 'asc' : 'desc')}
      data={[
        { value: 'asc', label: 'Price: Low to High' },
        { value: 'desc', label: 'Price: High to Low' },
      ]}
      rightSection={<IconFilter size={16} />}  // Add the filter icon to the right side
      rightSectionWidth={24}  // Adjust the width of the right section to fit the icon
    />
  );
}

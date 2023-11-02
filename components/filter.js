// Filter.js
import React from 'react';
import { FilterContainer, FilterLabel, FilterSelect } from '../styles/FilterStyles';

const Filter = ({ filters, setFilters }) => {
  // Logic for handling filters

  const handleFilterChange = (e) => {
    // Update filters based on user selection
    const selectedFilter = e.target.value;
    setFilters(selectedFilter);
  };

  return (
    <FilterContainer>
      <FilterLabel>Filter by Category:</FilterLabel>
      <FilterSelect onChange={handleFilterChange} value={filters}>
        {/* Options based on your data */}
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        {/* Add more options as needed */}
      </FilterSelect>
    </FilterContainer>
  );
};

export default Filter;

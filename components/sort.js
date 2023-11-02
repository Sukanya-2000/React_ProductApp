// Sort.js
import React from 'react';
import { SortContainer, SortLabel, SortSelect } from '../styles/SortStyles';

const Sort = ({ sort, setSort }) => {
  // Logic for handling sorting

  const handleSortChange = (e) => {
    // Update sort based on user selection
    const selectedSort = e.target.value;
    setSort(selectedSort);
  };

  return (
    <SortContainer>
      <SortLabel>Sort by:</SortLabel>
      <SortSelect onChange={handleSortChange} value={sort}>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        {/* Add more options as needed */}
      </SortSelect>
    </SortContainer>
  );
};

export default Sort;

// Pagination.js
import React from 'react';
import { PaginationContainer, PaginationButton } from '../styles/PaginationStyles';

const Pagination = ({ productsPerPage, totalProducts, currentPage, setCurrentPage }) => {
  // Logic for handling pagination

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page) => {
    // Update current page based on user selection
    setCurrentPage(page);
  };

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }).map((_, index) => (
        <PaginationButton
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;

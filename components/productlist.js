// ProductList.js
import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import Filter from './Filter';
import Sort from './Sort';
import Pagination from './Pagination';
import productsData from '../data/products'; // Assuming you have a file with sample data

const ProductList = () => {
  // State for managing products, filters, sorting, and pagination
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  // Logic for filtering, sorting, and pagination

  return (
    <div>
      <Filter filters={filters} setFilters={setFilters} />
      <Sort sort={sort} setSort={setSort} />
      <div>
        {displayedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;

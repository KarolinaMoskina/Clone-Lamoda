import React, { useState, useMemo } from 'react';
import ProductList from './components/ProductList/ProductList';
import Filters from './components/Filters/Filters';
import Sort from './components/Sort/Sort';
import { initialProducts } from './constants/constants';
import './styles.scss';

const App = () => {
  const [filters, setFilters] = useState({
    search: '',
    selectedColors: [],
    priceRange: [10, 9999],
  });

  const [activeSort, setActiveSort] = useState('priceAsc');

  const sortedProducts = useMemo(() => {
    return [...initialProducts].sort((a, b) => {
      switch (activeSort) {
        case 'priceAsc':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        case 'ratingDesc':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [activeSort]);

  return (
    <div className="app">
      <h1>Интернет-магазин</h1>
      <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
      <div className="main-content">
        <div className="filters-container">
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div className="product-list-container">
          <ProductList products={sortedProducts} filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default App;
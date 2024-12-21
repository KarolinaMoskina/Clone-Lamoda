import React from 'react';
import './Sort.scss';

const Sort = ({ activeSort, setActiveSort }) => {
  const sortOptions = [
    { value: 'priceAsc', label: 'Сначала дешевые' },
    { value: 'priceDesc', label: 'Сначала дорогие' },
    { value: 'ratingDesc', label: 'Сначала популярные' },
  ];

  return (
    <div className="sort">
      {sortOptions.map(option => (
        <button
          key={option.value}
          onClick={() => setActiveSort(option.value)}
          className={activeSort === option.value ? 'active' : ''}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Sort;
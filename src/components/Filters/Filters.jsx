import React, { useEffect, useMemo } from 'react';
import { colors } from '../../constants/constants';
import './Filters.scss';

const Filters = ({ filters, setFilters }) => {
  const handleColorChange = (color) => {
    setFilters(prev => ({
      ...prev,
      selectedColors: prev.selectedColors.includes(color)
        ? prev.selectedColors.filter(c => c !== color)
        : [...prev.selectedColors, color],
    }));
  };

  const handlePriceChange = (e, index) => {
    const value = Math.max(0, Number(e.target.value));
    setFilters(prev => {
      const newPriceRange = [...prev.priceRange];
      newPriceRange[index] = value;
      return { ...prev, priceRange: newPriceRange };
    });
  };

  useEffect(() => {
    if (filters.priceRange[0] > filters.priceRange[1]) {
      setFilters(prev => ({
        ...prev, 
        priceRange: [prev.priceRange[1], prev.priceRange[1]]
      }));
    }
  }, [filters.priceRange, setFilters]);

  return (
    <div className="filters">
      <input 
        type="text" 
        value={filters.search} 
        onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))} 
        placeholder="Поиск..." 
      />
      <div>
        <h3>Цвет</h3>
        {colors.map(color => (
          <label key={color}>
            <input 
              type="checkbox" 
              checked={filters.selectedColors.includes(color)} 
              onChange={() => handleColorChange(color)} 
            />
            {color}
          </label>
        ))}
      </div>
      <div>
        <h3>Цена</h3>
        <label>
          От:
          <input 
            type="number" 
            value={filters.priceRange[0]} 
            onChange={(e) => handlePriceChange(e, 0)} 
          />
        </label>
        <label>
          До:
          <input 
            type="number" 
            value={filters.priceRange[1]} 
            onChange={(e) => handlePriceChange(e, 1)} 
          />
        </label>
      </div>
    </div>
  );
};

export default Filters;
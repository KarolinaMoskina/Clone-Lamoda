import React, { useMemo } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.scss';

const ProductList = ({ products, filters }) => {
  const filterFunctions = useMemo(() => [
    (product) =>
      product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.search.toLowerCase()),
    (product) =>
      filters.selectedColors.length === 0 || filters.selectedColors.includes(product.color),
    (product) =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1],
  ], [filters]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      filterFunctions.every(fn => fn(product))
    );
  }, [products, filterFunctions]);

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => <ProductItem key={product.id} product={product} />)
      ) : (
        <p>По вашему запросу ничего не найдено.</p>
      )}
    </div>
  );
};

export default ProductList;
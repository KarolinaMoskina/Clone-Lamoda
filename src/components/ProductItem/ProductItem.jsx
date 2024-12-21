import React from 'react';
import './ProductItem.scss';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Цена: ${product.price}</p>
      <p>Цвет: {product.color}</p> 
      <p>Рейтинг: {product.rating} ⭐</p>
    </div>
  );
};

export default ProductItem;

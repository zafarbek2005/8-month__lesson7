import React from 'react';
import './Product.scss'; 
import { Link } from 'react-router-dom';

const Product = ({ data }) => {

  return (
    <div className="product-container container">
      {data?.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.urls[0]} alt={product.name} className="product-image" />
          <div className="product-details">
          <h2 className="product-name">{product.name}</h2>

            <Link to={`product/${product.id}`}>
            <p className="product-description">{product.description}</p>
        
            </Link>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

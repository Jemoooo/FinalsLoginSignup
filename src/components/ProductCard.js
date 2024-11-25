import React from 'react';

const ProductCard = ({ product, addToCart }) => { // Accept addToCart as a prop
  const imageUrl = `http://localhost:5000/${product.image}`;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₱{product.price}</p>
      
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

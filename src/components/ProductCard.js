// src/components/ProductCard.js
import React from 'react';


const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="w-60 h-48 mb-4 relative">
        <img 
          className="absolute inset-0 w-full h-full object-cover rounded-md" 
          src={product.image} 
          alt={product.name} 
        />
      </div>
     
      {/* Product Name */}
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      
      {/* Product Price */}
      <p className="text-gray-700 mb-2">${product.price}</p>
      
      {/* Sale Badge (if applicable) */}
      {product.isOnSale && (
        <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">
          Sale
        </span>
      )}
      
      {/* Short Description */}
      {product.shortDescription && (
        <p className="text-gray-500 mb-4">{product.shortDescription}</p>
      )}
      
      {/* Add to Cart Button */}
      <button 
        onClick={() => onAddToCart(product)} 
        className="mt-4 bg-blue-500 text-white w-full h-12 rounded hover:bg-blue-600 text-center"
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

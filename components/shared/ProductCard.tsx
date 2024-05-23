import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-60 md:w-64 mx-auto mb-6 sm:mb-0">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Best Seller
        </span>
        <span className="absolute top-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded">
          {product.alcoholPercentage}%
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

'use client'
import React, { useState } from 'react';
import Modal from './Modal';
import Link from 'next/link';

const FeaturedSection = ({ products }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Featured Products</h2>
        <Link href='/products'> 
        <p  className='text-center mb-4'> View More</p>
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md md:w-full">
              <div className='relative'>
              <img src={product.image} alt={product.name} className="w-full h-52 object-cover mb-4" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Best Seller
              </span>
              <span className="absolute top-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded">
                {product.alcoholPercentage}%
              </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none "
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <Modal
          product={selectedProduct}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
};

export default FeaturedSection;

'use client'
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Modal from './Modal';

const BestSellingSection = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <h2 className="text-3xl font-bold mx-4">Best Selling</h2>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <a href="/products" className="text-blue-500 hover:underline mb-8 inline-block">
          View all products
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default BestSellingSection;

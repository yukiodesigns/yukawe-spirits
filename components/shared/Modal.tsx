'use client'
import React, { useState, useEffect } from 'react';

const Modal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  useEffect(() => {
    setTotalPrice((product.price * quantity).toFixed(2));
  }, [quantity, product.price]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-lg mb-4">Price: ${totalPrice}</p>
        <div className="flex items-center mb-4">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="bg-gray-300 text-gray-800 px-3 py-1 rounded"
          >
            -
          </button>
          <span className="mx-4">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="bg-gray-300 text-gray-800 px-3 py-1 rounded"
          >
            +
          </button>
        </div>
        <div className="flex justify-between">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Continue Shopping
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

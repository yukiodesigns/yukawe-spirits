import React from 'react'
import '../../app/globals.css'
import Link from 'next/link';

const CTA = () => {
  return (
    <div className="relative overflow-hidden h-96 md:h-[60vh]">
      <div className="absolute inset-0">
        <div
          className="h-full parallax-bg"
          style={{ backgroundImage: 'url(https://foodyoushouldtry.com/wp-content/uploads/2020/10/AdobeStock_263446624-scaled.jpeg)', filter: 'brightness(0.5)' }}
        />
      </div>
      <div className="relative z-10 flex items-center h-full px-8 md:px-16 lg:px-24">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Learn More About Us
          </h2>
          <p className="text-lg md:text-xl text-white mb-8">
            Discover who we are, our mission, and what we stand for.
          </p>
          <Link href="/about" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;

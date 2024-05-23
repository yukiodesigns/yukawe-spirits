'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const heroContent = [
    { id: 1, text: 'Welcome to Our Website', image: '/hero1.jpg' },
    { id: 2, text: 'Discover Our Products', image: '/hero2.jpg' },
    { id: 3, text: 'Join Our Community', image: '/hero3.jpg' },
  ];

  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prevContent) => (prevContent + 1) % heroContent.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroContent.length]);

  return (
    <section className="relative w-full h-[75vh] sm:h-[70vh] md:h-[60vh] lg:h-[50vh] overflow-hidden">
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        <Image
          src={heroContent[currentContent].image}
          alt={heroContent[currentContent].text}
          layout="fill"
          objectFit="cover"
          className="opacity-70 transition-opacity duration-1000"
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 bg-black bg-opacity-50 transition-opacity duration-1000 w-full max-w-lg mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-none">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 transition-opacity duration-1000">
          {heroContent[currentContent].text}
        </h1>
        <p className="text-lg md:text-xl text-white transition-opacity duration-1000">Explore the best we have to offer</p>
      </div>
    </section>
  );
};

export default HeroSection;

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { FaWhatsapp, FaShoppingCart, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const placeholders = [
    "Gin",
    "Vodka",
    "Vape",
    "Whisky",
    "Brandy",
  ];

  const handleMouseEnter = (category) => {
    if (isDesktop) {
      setDropdown(category);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setDropdown(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const categories = [
    { name: 'Wines', subcategories: ['Red Wine', 'White Wine', 'Rose Wine'] },
    { name: 'Spirits', subcategories: ['Vodka', 'Whiskey', 'Rum'] },
    { name: 'Non-Alcoholic Drinks', subcategories: ['Juices', 'Sodas'] },
    { name: 'Tobacco', subcategories: ['Cigarettes', 'Cigars'] },
    { name: 'Beers', subcategories: ['Lager', 'Ale'] },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-black text-white flex justify-center items-center py-2">
        <FaWhatsapp className="mr-2" />
        <span>Contact us on WhatsApp</span>
      </div>

      {/* Main Navbar */}
      <div className={`flex justify-between items-center py-4 px-6 bg-white shadow-md ${isScrolled ? 'sticky top-0 z-50' : ''}`}>
        <Link href="/" className="text-2xl font-bold">Yukawe Spirits </Link>
        <div className="hidden md:block w-1/2 md:w-1/3">
          {/* <input type="text" placeholder="Search..." className="border border-gray-300 rounded px-4 py-2 w-full" /> */}
          <PlaceholdersAndVanishInput  placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />

        </div>
        <div className="flex items-center">
          <Link href="/cart" className="text-2xl">
            <FaShoppingCart />
          </Link>
          <button  className="md:hidden text-2xl ml-4" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className={`md:hidden px-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        {/* <input type="text" placeholder="Search..." className="border border-gray-300 rounded px-4 py-2 w-full mb-4" /> */}
        <PlaceholdersAndVanishInput  placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
      </div>

      {/* Category Navigation */}
      <div className="bg-gray-800 text-white hidden md:block">
        <div className="container mx-auto flex justify-evenly">
          {categories.map((category) => (
            <div key={category.name} onMouseEnter={() => handleMouseEnter(category.name)} onMouseLeave={handleMouseLeave}  className="relative px-4 py-3 cursor-pointer" >
              <Link href={`/${category.name.toLowerCase()}`}>
                {category.name}
              </Link>
              {dropdown === category.name && (
                <div className="absolute left-0 top-full bg-gray-700 mt-2 rounded shadow-lg w-48">
                  {category.subcategories.map((sub) => (
                    <Link href={`/${category.name.toLowerCase()}/${sub.toLowerCase().replace(' ', '-')}`} key={sub} className="block px-4 py-2 hover:bg-gray-600" >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Links Bar */}
      <div className={`bg-gray-800 text-white md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto flex flex-col py-4">
          {categories.map((category) => (
            <Link href={`/${category.name.toLowerCase()}`} key={category.name} className="px-6 py-2"> {category.name} </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

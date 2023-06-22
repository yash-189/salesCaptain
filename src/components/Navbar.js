import React, { useState } from 'react';
import logo from '../assets/icon.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="font-Comfortaa text-gray-600 body-font bg-white z-50 shadow sticky top-0">

      
      <div className="container mx-auto flex flex-wrap md:py-5 py-8 flex-row items-center    relative justify-between z-10  ">
        <div onClick={() => navigate('/')} className="flex md:mb-0  order-1  ">
          <img src={logo} className="h-8 md:w-full w-44 cursor-pointer" alt="Logo" />
        </div>
        <nav className={`md:order-2  order-3 md:ml-auto flex flex-wrap items-center flex-col lg:flex-row bg-white -z-10 lg:w-auto w-full py-2 lg:py-0 text-base justify-center transition-all duration-200 lg:my-0 my-4 ${isMenuOpen ? 'translate-y-28 shadow' : '-translate-y-80'} lg:translate-y-0 absolute lg:relative md:shadow-none `}>
          <Link className="mr-5 hover:text-blue-500">Products</Link>
          <Link className="mr-5 hover:text-blue-500">Solutions</Link>
          <Link className="mr-5 hover:text-blue-500">Pricing</Link>
          <Link className="mr-5 hover:text-blue-500">Resources</Link>
          <Link className="mr-5 hover:text-blue-500">Support</Link>
        </nav>
        <div className="order-2 md:order-3 md:ml-auto flex flex-wrap items-center text-base justify-center space-x-4  md:mt-0 ">
          <button
            onClick={() => navigate('/login')}
            type="button"
            className="text-black border-black focus:outline-none rounded-lg px-4 py-2 text-center outline-2 outline-black hover:outline-offset-2 transition-all"
          >
            Sign in
          </button>
          <button
            type="button"
            className="text-white md:block hidden bg-black hover:bg-gray-800 focus:outline-none rounded-lg px-4 py-2 text-center outline-2  hover:outline-offset-2 transition-all"
          >
            Get Started
          </button>
        </div>
        <div className="md:hidden ml-auto absolute right-4 top-4">
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

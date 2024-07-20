import { useState } from 'react';
import Logo_1 from '../assets/Logo_1.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white p-4 text-[#333]">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <img className='h-16 w-auto' src={Logo_1} alt="Esemje Appliances Pvt. Ltd." />
        </div>
        <div className="hidden md:flex space-x-6 uppercase text-sm font-medium">
          <a href="#home" className="nav-link hover:underline hover:text-[#0860a1]">Home</a>
          <a href="#products" className="nav-link hover:underline hover:text-[#0860a1]">Products</a>
          <a href="#services" className="nav-link hover:underline hover:text-[#0860a1]">Services</a>
          <a href="#reviews" className="nav-link hover:underline hover:text-[#0860a1]">Reviews</a>
          <a href="#contact" className="nav-link hover:underline hover:text-[#0860a1]">Contact Us</a>
        </div>
        <div className="md:hidden">
          {/* Hamburger menu for mobile */}
          <button 
            className="mobile-menu-button focus:outline-none"
            aria-label="Toggle Mobile Menu"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            onClick={toggleMobileMenu}
          >
            <svg className={`w-6 h-6 ${isMobileMenuOpen ? 'text-[#0860a1]' : 'text-[#333]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2 items-center font-medium">
            <li><a href="#home" className="nav-link hover:underline hover:text-[#0860a1]">Home</a></li>
            <li><a href="#products" className="nav-link hover:underline hover:text-[#0860a1]">Products</a></li>
            <li><a href="#services" className="nav-link hover:underline hover:text-[#0860a1]">Services</a></li>
            <li><a href="#reviews" className="nav-link hover:underline hover:text-[#0860a1]">Reviews</a></li>
            <li><a href="#contact" className="nav-link hover:underline hover:text-[#0860a1]">Contact Us</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

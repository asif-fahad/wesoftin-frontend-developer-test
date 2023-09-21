import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="text-white font-bold text-xl">Wesoftin</Link>
                    </div>
                    <div className={`hidden md:flex items-center space-x-4 ${isOpen ? 'hidden' : 'block'}`}>
                        <Link to="/" className={`text-white ${location.pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
                        <Link to="/about" className={`text-white ${location.pathname === '/about' ? 'font-bold' : ''}`}>About</Link>
                        <Link to="/services" className={`text-white ${location.pathname === '/services' ? 'font-bold' : ''}`}>Services</Link>
                        <Link to="/contact" className={`text-white ${location.pathname === '/contact' ? 'font-bold' : ''}`}>Contact</Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Toggle logic for small screens */}
                {isOpen && (
                    <div className="md:hidden block mt-4">
                        <Link to="/" className={`block text-white mb-2 ${location.pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
                        <Link to="/about" className={`block text-white mb-2 ${location.pathname === '/about' ? 'font-bold' : ''}`}>About</Link>
                        <Link to="/services" className={`block text-white mb-2 ${location.pathname === '/services' ? 'font-bold' : ''}`}>Services</Link>
                        <Link to="/contact" className={`block text-white mb-2 ${location.pathname === '/contact' ? 'font-bold' : ''}`}>Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;

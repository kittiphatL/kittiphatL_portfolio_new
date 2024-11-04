// Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold text-blue-600">
                            Kittiphat Lotrakul
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="about" smooth={true} duration={500} className="cursor-pointer text-gray-800 hover:text-blue-600">
                            About
                        </Link>
                        <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-gray-800 hover:text-blue-600">
                            Projects
                        </Link>
                        <Link to="skills" smooth={true} duration={500} className="cursor-pointer text-gray-800 hover:text-blue-600">
                            Skills
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-gray-800 hover:text-blue-600">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="about" smooth={true} duration={500} className="block cursor-pointer text-gray-800 hover:text-blue-600" onClick={toggleMenu}>
                            About
                        </Link>
                        <Link to="projects" smooth={true} duration={500} className="block cursor-pointer text-gray-800 hover:text-blue-600" onClick={toggleMenu}>
                            Projects
                        </Link>
                        <Link to="skills" smooth={true} duration={500} className="block cursor-pointer text-gray-800 hover:text-blue-600" onClick={toggleMenu}>
                            Skills
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className="block cursor-pointer text-gray-800 hover:text-blue-600" onClick={toggleMenu}>
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Nav;

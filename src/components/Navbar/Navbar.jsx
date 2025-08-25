import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavLinkItem = ({name, url}) => {
        return (
            <Link to={url} className="text-gray-700 hover:text-primary-color px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                {name}
            </Link>
        )
    }

    const navItems = [
        {
            name: 'Features',
            url: '#features'
        },
        
        {
            name: 'Pricing',
            url: '#pricing'
        },
        
        {
            name: 'About',
            url: '#about'
        },
        
        {
            name: 'Contact',
            url: '#contact'
        },
        
        {
            name: 'Login',
            url: '#login'
        },
        
    ]

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50" style={{backgroundColor: 'var(--light-color)'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold text-primary-color" style={{fontFamily: 'Lovelo'}}>
                            Piemenu
                        </h1>
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {navItems.map((item, index) => (
                                <NavLinkItem key={index} name={item.name} url={item.url} />
                            ))}
                        </div>
                        <Link to="#get-started" className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-color hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-color transition-colors duration-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#features" className="text-gray-700 hover:text-primary-color block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                            Features
                        </a>
                        <a href="#pricing" className="text-gray-700 hover:text-primary-color block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                            Pricing
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-primary-color block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                            About
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-primary-color block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                            Contact
                        </a>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <a href="#login" className="text-gray-700 hover:text-primary-color block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                                Login
                            </a>
                            <a href="#get-started" className="bg-primary-color hover:bg-primary-color/90 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-2">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

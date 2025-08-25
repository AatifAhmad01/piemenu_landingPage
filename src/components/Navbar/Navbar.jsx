import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavLinkItem = ({name, url, isActive = false}) => {
        return (
            <Link 
                to={url} 
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    isActive 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                }`}
            >
                {name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full ${
                    isActive ? 'w-full' : ''
                }`}></span>
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
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
                : 'bg-white shadow-sm'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center group">
                        <Link to="/" className="flex items-center space-x-2 group-hover:scale-105 transition-transform duration-300">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">P</span>
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent" style={{fontFamily: 'Lovelo'}}>
                                Piemenu
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <div className="flex items-center space-x-1">
                            {navItems.slice(0, -1).map((item, index) => (
                                <NavLinkItem key={index} name={item.name} url={item.url} />
                            ))}
                        </div>
                        
                        {/* Login Link */}
                        <Link 
                            to="#login" 
                            className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors duration-300"
                        >
                            {navItems[navItems.length - 1].name}
                        </Link>
                        
                        {/* CTA Button */}
                        <Link 
                            to="#get-started" 
                            className="relative inline-flex items-center px-6 py-3 overflow-hidden text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg group hover:from-orange-500 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                            <span className="relative flex items-center space-x-2">
                                <span className="font-medium">Get Started</span>
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="relative inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                                    isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                                }`}></span>
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}></span>
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                                    isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                                }`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
            } overflow-hidden`}>
                <div className="bg-white border-t border-gray-200 shadow-lg">
                    <div className="px-4 py-6 space-y-4">
                        {/* Mobile Nav Items */}
                        <div className="space-y-2">
                            {navItems.slice(0, -1).map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.url}
                                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-base font-medium transition-all duration-200 transform hover:translate-x-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        
                        {/* Divider */}
                        <div className="border-t border-gray-200 pt-4">
                            <Link
                                to="#login"
                                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-base font-medium transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {navItems[navItems.length - 1].name}
                            </Link>
                        </div>
                        
                        {/* Mobile CTA */}
                        <div className="pt-4">
                            <Link
                                to="#get-started"
                                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg font-medium hover:from-orange-500 hover:to-orange-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

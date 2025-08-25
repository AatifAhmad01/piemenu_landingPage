import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-light-color mt-10 px-4 py-2">
            <div className="flex justify-between items-center ">
                <div className='flex gap-2 items-center'>
                    <p className="text-2xl font-bold">Piemenu</p>
                    <p className="text-gray-400 text-sm">
                        © 2024 Easy Menu. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-4 text-sm">
                    <a href="#privacy" className="text-gray-400 hover:text-primary-color transition-colors duration-200">Privacy Policy</a>
                    <a href="#terms" className="text-gray-400 hover:text-primary-color transition-colors duration-200">Terms of Service</a>
                    <a href="#cookies" className="text-gray-400 hover:text-primary-color transition-colors duration-200">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
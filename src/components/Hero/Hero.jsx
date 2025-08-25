import React, { useState, useEffect } from 'react';
import Circle from '../background/circle';
import FoodCard from '../FoodCard/FoodCard';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Burger from '../../assets/images/burger.webp';
import WebView from '../../assets/images/web-view.png';
import MobileView from '../../assets/images/mobile-view.png';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className='min-h-screen w-full overflow-hidden relative bg-gradient-to-br from-gray-50 via-white to-orange-50'>
            {/* Background Decorations */}
            <div className='absolute inset-0 overflow-hidden'>
                <Circle size="150px" className='bg-orange-400 opacity-20 animate-pulse' style={{ position: 'absolute', top: '-60px', left: '10%'}}/>
                <div className='hidden lg:block'>
                    <Circle size="800px" className='bg-purple-400 opacity-10 animate-pulse' style={{position: 'absolute', top: '-200px', right: '-150px'}}/>
                </div>
                <div className='absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 blur-2xl animate-bounce'></div>
                <div className='absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-10 blur-2xl animate-pulse'></div>
            </div>

            <div className="container max-w-6xl min-h-screen flex flex-col justify-center items-center m-auto relative z-10 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                    {/* Content Section */}
                    <div className={`space-y-6 transition-all duration-1000 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        {/* Badge */}
                        {/* <div className='inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 px-3 py-1.5 rounded-full border border-orange-200 shadow-sm'>
                            <div className='w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse'></div>
                            <span className='text-xs font-medium'>🚀 Launch Your Menu Online</span>
                        </div> */}
                        
                        {/* Main Heading */}
                        <div className='space-y-4'>
                            <h1 className='text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight'>
                                Publish Your Restaurant 
                                <span className='bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'> Menu Online</span>
                            </h1>
                            <p className='text-base lg:text-md text-gray-600 leading-relaxed max-w-md'>
                                Instantly create and share your restaurant's menu online. Make it easy for customers to browse your dishes from any device, anytime.
                            </p>
                        </div>

                        {/* Features Preview */}
                        <div className='space-y-3'>
                            <h3 className='text-xl font-bold text-gray-800 mb-3'>Showcase Your Menu</h3>
                            <div className='relative'>
                                <div className='overflow-auto w-full scrollbar-hide'>
                                    <div className='flex gap-3 mb-4 animate-scroll'>
                                        <div className='transform hover:scale-105 transition-transform duration-300'>
                                            <FoodCard image={Burger} />
                                        </div>
                                        <div className='transform hover:scale-105 transition-transform duration-300'>
                                            <FoodCard image={Burger}/>
                                        </div>
                                        <div className='transform hover:scale-105 transition-transform duration-300'>
                                            <FoodCard image={Burger}/>
                                        </div>
                                        <div className='transform hover:scale-105 transition-transform duration-300'>
                                            <FoodCard image={Burger}/>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Scroll indicator */}
                                <div className='flex justify-center'>
                                    <div className='flex space-x-1'>
                                        <div className='w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce'></div>
                                        <div className='w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce' style={{animationDelay: '0.1s'}}></div>
                                        <div className='w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce' style={{animationDelay: '0.2s'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className='flex flex-col sm:flex-row gap-3 pt-2'>
                            <PrimaryButton title="Start Creating Now" />
                            <button className='px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm'>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Watch Demo
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className='flex items-center gap-4 pt-3 border-t border-gray-200'>
                            <div className='flex items-center gap-2'>
                                <div className='flex -space-x-1'>
                                    <div className='w-5 h-5 bg-blue-500 rounded-full border-2 border-white'></div>
                                    <div className='w-5 h-5 bg-green-500 rounded-full border-2 border-white'></div>
                                    <div className='w-5 h-5 bg-purple-500 rounded-full border-2 border-white'></div>
                                </div>
                                <span className='text-xs text-gray-600'>500+ Restaurants</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='flex text-yellow-400'>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className='text-xs text-gray-600'>4.9/5 Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className={`relative transition-all duration-1000 delay-300 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        {/* Main Preview */}
                        <div className="relative bg-white rounded-xl shadow-xl p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-3 mb-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                                <img src={WebView} alt="Menu Preview" className="w-full rounded-lg shadow-md" />
                            </div>
                            
                            {/* Floating Elements */}
                            <div className="absolute -top-3 -right-3 bg-white rounded-lg shadow-md p-2 border border-gray-100 animate-bounce">
                                <div className="text-center">
                                    <div className="text-sm font-bold text-green-600">Live</div>
                                    <div className="text-xs text-gray-500">Menu</div>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-3 -left-3 bg-white rounded-lg shadow-md p-2 border border-gray-100">
                                <div className="text-center">
                                    <div className="text-sm font-bold text-blue-600">24/7</div>
                                    <div className="text-xs text-gray-500">Access</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Mobile Preview */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-1.5">
                                <img src={MobileView} alt="Mobile Menu" className="w-16 h-auto rounded" />
                            </div>
                        </div>
                        
                        {/* Background decoration elements */}
                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 blur-lg animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-20 blur-lg animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
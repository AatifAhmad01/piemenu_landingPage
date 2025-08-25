import React, { useState } from 'react';
import Circle from '../components/background/circle';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';
import FoodCard from '../components/FoodCard/FoodCard';
import Burger from '../assets/images/burger.webp';
import WebView from '../assets/images/web-view.png';
import MobileView from '../assets/images/mobile-view.png';
import StepCard from '../components/StepCard/StepCard';
import MenuProjectCard from '../components/MenuProjectCard/MenuProjectCard';
import PrimaryButtonLight from '../components/PrimaryButtonLight/PrimaryButtonLight';
import FeedbackCard from '../components/FeedbackCard/FeedbackCard';
import TextInput from '../components/Input/TextInput';
import FoodOrderItem from '../components/FoodOrderItem/FoodOrderItem';
import Cursor from '../assets/icons/click.png';
import StepCardMobile from '../components/StepCardMobile/StepCardMobile';
import Footer from '../components/Footer/Footer.jsx';
import Hero from '../components/Hero/Hero';


const Home = () => {

    const [selectedStep, setSelectedStep] = useState(1);
    

    const onClickStep = (id) => {
        setSelectedStep(id);
    }

    return (
        <>
            <main className=''>
                <Hero />

                {/* How It Works Section */}
                <section className='py-16 lg:py-24 relative'>
                    <Circle size="300px" style={{backgroundColor: 'var(--primary-color)', position: 'absolute', top: '50%', transform: 'translate(-70%, -50%)', opacity: 0.1}}/>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className='text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
                                How It Works
                            </h2>
                            <p className='text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                                Create your restaurant's digital menu in just three simple steps. 
                                Get started in minutes, not hours.
                            </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto'>
                            {/* Step 1 */}
                            <div className='group relative'>
                                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
                                    {/* Background decoration */}
                                    <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-bl-full opacity-60'></div>
                                    
                                    {/* Step number */}
                                    <div className='absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                                        1
                                    </div>
                                    
                                    {/* Icon */}
                                    <div className='flex justify-center mb-6 mt-4'>
                                        <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    <div className='text-center'>
                                        <h3 className='text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300'>
                                            Sign Up
                                        </h3>
                                        <p className='text-gray-600 leading-relaxed'>
                                            Create your account in seconds with just your email and restaurant details. 
                                            No complicated setup required.
                                        </p>
                                    </div>
                                    
                                    {/* Arrow for desktop */}
                                    <div className='hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2'>
                                        <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg'>
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className='group relative'>
                                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
                                    {/* Background decoration */}
                                    <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-bl-full opacity-60'></div>
                                    
                                    {/* Step number */}
                                    <div className='absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                                        2
                                    </div>
                                    
                                    {/* Icon */}
                                    <div className='flex justify-center mb-6 mt-4'>
                                        <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    <div className='text-center'>
                                        <h3 className='text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300'>
                                            Build Your Menu
                                        </h3>
                                        <p className='text-gray-600 leading-relaxed'>
                                            Add your food items, upload beautiful photos, and set prices. 
                                            Our intuitive interface makes it easy to showcase your dishes.
                                        </p>
                                    </div>
                                    
                                    {/* Arrow for desktop */}
                                    <div className='hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2'>
                                        <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg'>
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className='group relative'>
                                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
                                    {/* Background decoration */}
                                    <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-bl-full opacity-60'></div>
                                    
                                    {/* Step number */}
                                    <div className='absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                                        3
                                    </div>
                                    
                                    {/* Icon */}
                                    <div className='flex justify-center mb-6 mt-4'>
                                        <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    <div className='text-center'>
                                        <h3 className='text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300'>
                                            Share & Get Orders
                                        </h3>
                                        <p className='text-gray-600 leading-relaxed'>
                                            Get your unique menu link and share it with customers. 
                                            Watch your orders grow with our powerful analytics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to action */}
                        <div className='text-center mt-16'>
                            <div className='inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-8 py-4 border border-blue-100'>
                                <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                                <span className='text-gray-700 font-medium'>Ready to get started?</span>
                                <PrimaryButton title="Create Your Menu" />
                            </div>
                        </div>
                    </div>
                </section>
            
                {/* Presenting Dashboard to customers */}
                <section className='py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white'>
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-10 blur-3xl"></div>
                    
                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Content Section */}
                            <div className='space-y-8'>
                                {/* Badge */}
                                <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200'>
                                    <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
                                    <span className='text-sm font-medium'>Dashboard Preview</span>
                                </div>
                                
                                {/* Main Heading */}
                                <div className='space-y-6'>
                                    <h2 className='text-4xl lg:text-6xl font-bold text-gray-800 leading-tight'>
                                        Your Personal
                                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> Dashboard</span>
                                    </h2>
                                    <p className='text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg'>
                                        Take full control of your restaurant's digital presence with our intuitive dashboard. 
                                        Manage menus, track orders, and grow your business all from one place.
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className='space-y-4'>
                                    <div className='flex items-start gap-4'>
                                        <div className='w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-gray-800 mb-1'>Real-time Menu Management</h4>
                                            <p className='text-gray-600 text-sm'>Update prices, add new items, and manage availability instantly</p>
                                        </div>
                                    </div>
                                    
                                    <div className='flex items-start gap-4'>
                                        <div className='w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-gray-800 mb-1'>Order Analytics & Insights</h4>
                                            <p className='text-gray-600 text-sm'>Track customer preferences and optimize your menu performance</p>
                                        </div>
                                    </div>
                                    
                                    <div className='flex items-start gap-4'>
                                        <div className='w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-gray-800 mb-1'>Customer Feedback System</h4>
                                            <p className='text-gray-600 text-sm'>Collect reviews and ratings to improve your service quality</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                                    <PrimaryButton title="Try Dashboard Demo" />
                                    <button className='px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300'>
                                        Watch Video Tour
                                    </button>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="relative">
                                {/* Main Dashboard Image */}
                                <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4 mb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <img src={WebView} alt="Dashboard Preview" className="w-full rounded-lg shadow-lg" />
                                    </div>
                                    
                                    {/* Floating Stats Cards */}
                                    <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-green-600">+127%</div>
                                            <div className="text-xs text-gray-500">Orders</div>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">4.9★</div>
                                            <div className="text-xs text-gray-500">Rating</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Background decoration elements */}
                                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 blur-xl"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features section */}
                <section className='py-16 lg:py-24 relative overflow-hidden' id='features'>
                    {/* Background decorations */}
                    <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl z-20"></div>
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-10 blur-3xl"></div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200 mb-6'>
                                <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
                                <span className='text-sm font-medium'>Powerful Features</span>
                            </div>
                            <h2 className='text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
                                Everything You Need to
                                <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> Succeed</span>
                            </h2>
                            <p className='text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                                Transform your restaurant with our comprehensive suite of features designed to boost sales, 
                                streamline operations, and delight your customers.
                            </p>
                        </div>

                        {/* Main Features Grid */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mb-16'>
                            {/* Feature 1: Digital Menu Creation */}
                            <div className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
                                <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-bl-full opacity-60'></div>
                                
                                <div className='flex items-start gap-6'>
                                    <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300'>
                                            Digital Menu Creation
                                        </h3>
                                        <p className='text-gray-600 leading-relaxed mb-4'>
                                            Create stunning digital menus in minutes with our intuitive drag-and-drop editor. 
                                            Add beautiful photos, descriptions, and pricing with just a few clicks.
                                        </p>
                                        <ul className='space-y-2'>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                                Drag-and-drop menu builder
                                            </li>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                                High-quality image optimization
                                            </li>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                                Real-time menu updates
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2: Online Ordering System */}
                            <div className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
                                <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-bl-full opacity-60'></div>
                                
                                <div className='flex items-start gap-6'>
                                    <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300'>
                                            Online Ordering System
                                        </h3>
                                        <p className='text-gray-600 leading-relaxed mb-4'>
                                            Accept orders 24/7 with our seamless online ordering platform. 
                                            Customers can browse, customize, and pay for their orders effortlessly.
                                        </p>
                                        <ul className='space-y-2'>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                                24/7 order acceptance
                                            </li>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                                Customizable order options
                                            </li>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                                Secure payment processing
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3: Table Reservations */}
                            <div className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
                                <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-purple-100 rounded-bl-full opacity-60'></div>
                                
                                <div className='flex items-start gap-6'>
                                    <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300'>
                                            Smart Table Reservations
                                        </h3>
                                        <p className='text-gray-600 leading-relaxed mb-4'>
                                            Automate your reservation system with intelligent scheduling. 
                                            No more phone calls or manual booking management.
                                        </p>
                                        <ul className='space-y-2'>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                                                Automated booking system
                                            </li>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                                                Real-time availability updates
                                            </li>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                                                Customer confirmation emails
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 4: Business Analytics */}
                            <div className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
                                <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-50 to-orange-100 rounded-bl-full opacity-60'></div>
                                
                                <div className='flex items-start gap-6'>
                                    <div className='w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300'>
                                            Advanced Analytics
                                        </h3>
                                        <p className='text-gray-600 leading-relaxed mb-4'>
                                            Get deep insights into your business performance with comprehensive analytics. 
                                            Track sales, customer behavior, and optimize your operations.
                                        </p>
                                        <ul className='space-y-2'>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
                                                Sales performance tracking
                                            </li>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
                                                Customer behavior insights
                                            </li>
                                            <li className='flex items-center gap-2 text-sm text-gray-600'>
                                                <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
                                                Revenue optimization tools
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Features Row */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
                            {/* Feature 5: Availability Management */}
                            <div className='group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'>
                                <div className='w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-4'>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300'>
                                    Availability Management
                                </h4>
                                <p className='text-gray-600 text-sm leading-relaxed'>
                                    Set your operating hours and let customers know when you're open. 
                                    Automatic status updates keep everyone informed.
                                </p>
                            </div>

                            {/* Feature 6: Customer Feedback */}
                            <div className='group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'>
                                <div className='w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-4'>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h4 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300'>
                                    Customer Feedback
                                </h4>
                                <p className='text-gray-600 text-sm leading-relaxed'>
                                    Collect reviews and ratings to improve your service. 
                                    Build trust with potential customers through authentic feedback.
                                </p>
                            </div>

                            {/* Feature 7: Multi-Location Support */}
                            <div className='group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'>
                                <div className='w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-4'>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300'>
                                    Multi-Location Support
                                </h4>
                                <p className='text-gray-600 text-sm leading-relaxed'>
                                    Manage multiple restaurant locations from a single dashboard. 
                                    Scale your business efficiently with centralized control.
                                </p>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className='text-center mt-16'>
                            <div className='inline-flex items-center gap-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-8 py-6 border border-blue-100 shadow-lg'>
                                <div className='w-4 h-4 bg-green-500 rounded-full animate-pulse'></div>
                                <div>
                                    <h3 className='text-xl font-bold text-gray-800 mb-2'>Ready to Transform Your Restaurant?</h3>
                                    <p className='text-gray-600 mb-4'>Join thousands of restaurants already using our platform</p>
                                </div>
                                <PrimaryButton title="Start Free Trial" />
                            </div>
                        </div>
                    </div>
                </section>


                {/* Pricing Section */}
                <section className='py-16 lg:py-24 relative bg-gradient-to-br from-gray-50 to-white overflow-hidden'>
                    {/* Background decorations */}
                    <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-10 blur-3xl"></div>
                    
                    <div className='container mx-auto px-4 relative z-10'>
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200 mb-6'>
                                <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
                                <span className='text-sm font-medium'>Simple Pricing</span>
                            </div>
                            <h2 className='text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
                                Choose Your
                                <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> Plan</span>
                            </h2>
                            <p className='text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                                Start free and scale as you grow. No hidden fees, no surprises. 
                                Cancel anytime with full refund within 30 days.
                            </p>
                        </div>

                        {/* Pricing Cards */}
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16'>
                            {/* Free Plan */}
                            <div className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
                                <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-bl-full opacity-60'></div>
                                
                                {/* Plan Header */}
                                <div className='text-center mb-8'>
                                    <h3 className='text-2xl font-bold text-gray-800 mb-2'>Starter</h3>
                                    <div className='mb-4'>
                                        <span className='text-4xl font-bold text-gray-800'>$0</span>
                                        <span className='text-gray-600 ml-2'>/month</span>
                                    </div>
                                    <p className='text-gray-600 text-sm'>Perfect for small restaurants getting started</p>
                                </div>

                                {/* Features List */}
                                <div className='space-y-4 mb-8'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Online digital menu</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>1,000 views per month</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>100 orders per month</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Basic analytics</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-500 line-through'>Table reservations</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-500 line-through'>Priority support</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className='w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 border border-gray-200'>
                                    Get Started Free
                                </button>
                            </div>

                            {/* Professional Plan - Featured */}
                            <div className='group bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-blue-500 relative overflow-hidden'>
                                {/* Popular Badge */}
                                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                                    <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg'>
                                        Most Popular
                                    </div>
                                </div>
                                
                                <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-100 rounded-bl-full opacity-60'></div>
                                
                                {/* Plan Header */}
                                <div className='text-center mb-8'>
                                    <h3 className='text-2xl font-bold text-gray-800 mb-2'>Professional</h3>
                                    <div className='mb-4'>
                                        <span className='text-4xl font-bold text-blue-600'>$29</span>
                                        <span className='text-gray-600 ml-2'>/month</span>
                                    </div>
                                    <p className='text-gray-600 text-sm'>Perfect for growing restaurants</p>
                                </div>

                                {/* Features List */}
                                <div className='space-y-4 mb-8'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Everything in Starter</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Unlimited views & orders</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Advanced analytics</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Table reservations</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Email support</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Custom branding</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className='w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl'>
                                    Start Free Trial
                                </button>
                            </div>

                            {/* Enterprise Plan */}
                            <div className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
                                <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-purple-100 rounded-bl-full opacity-60'></div>
                                
                                {/* Plan Header */}
                                <div className='text-center mb-8'>
                                    <h3 className='text-2xl font-bold text-gray-800 mb-2'>Enterprise</h3>
                                    <div className='mb-4'>
                                        <span className='text-4xl font-bold text-gray-800'>$99</span>
                                        <span className='text-gray-600 ml-2'>/month</span>
                                    </div>
                                    <p className='text-gray-600 text-sm'>For large restaurant chains</p>
                                </div>

                                {/* Features List */}
                                <div className='space-y-4 mb-8'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Everything in Professional</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Multi-location support</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Priority phone support</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Advanced integrations</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Custom API access</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700'>Dedicated account manager</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className='w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 border border-gray-200'>
                                    Contact Sales
                                </button>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className='text-center max-w-4xl mx-auto'>
                            <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                                <h3 className='text-2xl font-bold text-gray-800 mb-4'>All Plans Include</h3>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700 font-medium'>30-day free trial</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700 font-medium'>No setup fees</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center'>
                                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className='text-gray-700 font-medium'>Cancel anytime</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Built with pie menu */}
                <section className='py-16 lg:py-24 relative'>

                    <div className='container mx-auto px-4'>
                        <h3 className='text-5xl font-bold mb-10' style={{color: 'var(--light-color)'}}>Built with pie menu</h3>
                    </div>
                </section>

                {/* Whats Next */}
                {/* <section className='pd-v-50' style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center">

                            <div className="w-full lg:w-5/12">
                                <h3 className='text-5xl font-bold text-left lg:text-left text-center clr-light mb-0 lg:mb-0 mb-4 sm:mb-4' >What's Next</h3>
                                
                                <div className='block lg:hidden' style={{margin: '20px 0'}}></div>
                                <p className='text-center clr-light m-0 p-0' style={{padding: '10px 0', fontSize: '1.2em'}}>{'You will get a link to your new online restaurant which you can share on your social media and customers'}</p>

                                <div className='p-0 sm:p-0' style={{display: 'flex', gap: '20px'}}>
                                    <TextInput type={'email'} placeholder={'Email'}/>
                                    <div className=' hidden lg:block'>
                                        <PrimaryButton title={'Notify Me'} style={{height: '100%'}}/>
                                    </div>
                                </div>
                                <div className='block lg:hidden p-2' >
                                    <div className='flex justify-center' style={{marginTop: '10px'}}>
                                        <PrimaryButton title={'Notify Me'}/>
                                    </div>
                                </div>
                                <div className='block lg:hidden' style={{margin: '20px 0'}}></div>

                                <div className="w-full lg:w-5/12 block lg:hidden" style={{marginBottom: '30px'}}>
                                    <div className="flex flex-wrap">
                                        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                            <div className="w-4/12 lg:w-3/12">
                                                <FoodOrderItem image={Burger}/>
                                            </div>
                                            <div className="w-4/12" style={{position: 'relative'}}>
                                                <FoodOrderItem image={Burger}/>
                                                <img src={Cursor} alt="" style={{position: 'absolute', width: '40px', height: '40px', bottom: '-5%', left: '75%'}}/>
                                            </div>

                                            <div className="w-4/12 lg:w-3/12">
                                                <FoodOrderItem image={Burger}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="w-full lg:w-2/12 hidden lg:block">

                            </div>
                            <div className="w-full lg:w-5/12 md:w-6/12 hidden lg:block">
                                <div className="flex flex-wrap" >
                                    <div style={{display: 'flex', gap: '20px', justifyContent: 'flex-end', alignItems: 'center'}}>
                                        <div className="w-4/12 lg:w-3/12">
                                            <FoodOrderItem image={Burger}/>
                                        </div>
                                        <div className="w-4/12" style={{position: 'relative'}}>
                                            <FoodOrderItem image={Burger}/>
                                            <img src={Cursor} alt="" style={{position: 'absolute', width: '40px', height: '40px', bottom: '-5%', left: '75%'}}/>
                                        </div>

                                        <div className="w-4/12 lg:w-3/12">
                                            <FoodOrderItem image={Burger}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Bottom details */}
                {/* <section className='pd-v-50' >
                    <div className="container mx-auto px-4">
                        <div style={{display: 'flex', gap: '20px',flexDirection: 'column', alignItems: 'center'}}>
                            <h3 className='text-5xl font-bold m-0' style={{marginBottom: 0}}>Easy Menu</h3>
                            <p className='text-center m-0 p-0' style={{padding: '10px 0', fontSize: '1.2em', maxWidth: '500px'}}>{'You will get a link to your new online restaurant which you can share on your social media and customers'}</p>
                            <PrimaryButton title={"Register Now"}/>
                        </div>
                    </div>
                </section> */}

                {/* <Footer /> */}
            </main>
        </>
    );
};

export default Home;

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

                {/* Built with pie menu */}
                <section className='py-16 lg:py-24 relative'>
                    <div className='container mx-auto px-4'>
                        <h3 className='text-5xl font-bold mb-10' style={{color: 'var(--light-color)'}}>Built with pie menu</h3>
                    </div>
                </section>


                {/* Menu Showcase */}
                {/* <section className='py-16 lg:py-24 relative'>
                    <div className='container mx-auto px-4'>
                        <h3 className='text-5xl font-bold mb-10' style={{color: 'var(--light-color)'}}>Built with pie menu</h3>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12">
                                <MenuProjectCard />
                            </div>
                            <div className="w-full lg:w-4/12 hidden lg:block">
                                <MenuProjectCard />
                            </div>
                            <div className="w-full lg:w-4/12 hidden lg:block">
                                <MenuProjectCard />
                            </div>
                        </div>
                        <div className='flex justify-center items-center pd-20'  style={{marginTop: '20px'}}>
                            <PrimaryButtonLight title={'Try Now'}/>
                        </div>
                    </div>
                </section> */}

                {/* Client Reviews */}
                {/* <section className='pd-v-50'>
                    <div className="container mx-auto px-4">

                        <h3 className='text-5xl font-bold mb-4 lg:mb-4'>Clients' Feedback</h3>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12">
                                <FeedbackCard />
                                <FeedbackCard pos={'left'}/>
                                <FeedbackCard/>
                            </div>

                            <div className="w-full lg:w-6/12 hidden lg:block">
                                <FeedbackCard/>
                                <FeedbackCard pos={'right'}/>
                                <FeedbackCard/>
                            </div>
                        </div>
                    </div>
                </section> */}

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

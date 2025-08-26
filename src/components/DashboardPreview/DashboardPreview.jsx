import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import FeatureList from './FeatureList/FeatureList';
import DashboardImage from './DashboardImage/DashboardImage';

const DashboardPreview = () => {
    const features = [
        {
            id: 1,
            title: "Real-time Menu Management",
            description: "Update prices, add new items, and manage availability instantly",
            gradient: "from-green-500 to-teal-500"
        },
        {
            id: 2,
            title: "Order Analytics & Insights",
            description: "Track customer preferences and optimize your menu performance",
            gradient: "from-blue-500 to-purple-500"
        },
        {
            id: 3,
            title: "Customer Feedback System",
            description: "Collect reviews and ratings to improve your service quality",
            gradient: "from-purple-500 to-pink-500"
        }
    ];

    return (
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
                        <FeatureList features={features} />

                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                            <PrimaryButton title="Try Dashboard Demo" />
                            <button className='px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300'>
                                Watch Video Tour
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <DashboardImage />
                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;

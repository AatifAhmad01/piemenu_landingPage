import React from 'react';
import FeatureList from './FeatureList/FeatureList';

const PricingCard = ({ plan }) => {
    const { name, price, period, description, features, buttonText, buttonStyle, featured, bgGradient } = plan;

    return (
        <div className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden ${featured ? 'border-2 border-blue-500' : 'border border-gray-100'}`}>
            {/* Popular Badge */}
            {featured && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg'>
                        Most Popular
                    </div>
                </div>
            )}
            
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${bgGradient} rounded-bl-full opacity-60`}></div>
            
            {/* Plan Header */}
            <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold text-gray-800 mb-2'>{name}</h3>
                <div className='mb-4'>
                    <span className={`text-4xl font-bold ${featured ? 'text-blue-600' : 'text-gray-800'}`}>{price}</span>
                    <span className='text-gray-600 ml-2'>{period}</span>
                </div>
                <p className='text-gray-600 text-sm'>{description}</p>
            </div>

            {/* Features List */}
            <FeatureList features={features} />

            {/* CTA Button */}
            <button className={buttonStyle}>
                {buttonText}
            </button>
        </div>
    );
};

export default PricingCard;

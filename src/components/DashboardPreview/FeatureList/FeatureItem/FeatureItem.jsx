import React from 'react';

const FeatureItem = ({ feature }) => {
    const { title, description, gradient } = feature;

    return (
        <div className='flex items-start gap-4'>
            <div className={`w-6 h-6 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </div>
            <div>
                <h4 className='font-semibold text-gray-800 mb-1'>{title}</h4>
                <p className='text-gray-600 text-sm'>{description}</p>
            </div>
        </div>
    );
};

export default FeatureItem;

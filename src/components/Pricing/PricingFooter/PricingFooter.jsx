import React from 'react';

const PricingFooter = () => {
    const benefits = [
        {
            id: 1,
            text: "30-day free trial",
            color: "text-blue-600",
            bgColor: "bg-blue-100"
        },
        {
            id: 2,
            text: "No setup fees",
            color: "text-green-600",
            bgColor: "bg-green-100"
        },
        {
            id: 3,
            text: "Cancel anytime",
            color: "text-purple-600",
            bgColor: "bg-purple-100"
        }
    ];

    return (
        <div className='text-center max-w-4xl mx-auto'>
            <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>All Plans Include</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className='flex items-center gap-3'>
                            <div className={`w-8 h-8 ${benefit.bgColor} rounded-full flex items-center justify-center`}>
                                <svg className={`w-4 h-4 ${benefit.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className='text-gray-700 font-medium'>{benefit.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingFooter;

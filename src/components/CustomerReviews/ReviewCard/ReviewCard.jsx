import React from 'react';
import StarRating from './StarRating/StarRating';
import CustomerInfo from './CustomerInfo/CustomerInfo';

const ReviewCard = ({ review }) => {
    const { rating, content, customer, bgGradient, quoteGradient, gradient } = review;

    return (
        <div className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${bgGradient} rounded-bl-full opacity-60`}></div>
            
            {/* Quote Icon */}
            <div className={`absolute top-6 left-6 w-8 h-8 bg-gradient-to-r ${quoteGradient} rounded-full flex items-center justify-center shadow-lg`}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
            </div>

            {/* Star Rating */}
            <StarRating rating={rating} />

            {/* Review Text */}
            <p className='text-gray-700 leading-relaxed mb-6 italic mt-4'>
                "{content}"
            </p>

            {/* Customer Info */}
            <CustomerInfo customer={customer} gradient={gradient} />
        </div>
    );
};

export default ReviewCard;

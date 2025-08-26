import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const ReviewCTA = () => {
    return (
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
    );
};

export default ReviewCTA;

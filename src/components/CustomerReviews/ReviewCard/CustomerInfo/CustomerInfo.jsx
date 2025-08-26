import React from 'react';

const CustomerInfo = ({ customer, gradient }) => {
    const { name, title, initial } = customer;

    return (
        <div className='flex items-center gap-4'>
            <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {initial}
            </div>
            <div>
                <h4 className='font-semibold text-gray-800 mb-1'>{name}</h4>
                <p className='text-sm text-gray-600'>{title}</p>
            </div>
        </div>
    );
};

export default CustomerInfo;

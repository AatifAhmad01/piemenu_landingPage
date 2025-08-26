import React from 'react';

const ReviewStats = ({ stats }) => {
    return (
        <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto mb-16'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {stats.map((stat, index) => (
                    <div key={index} className='text-center'>
                        <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                        <div className='text-gray-600 text-sm'>{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewStats;

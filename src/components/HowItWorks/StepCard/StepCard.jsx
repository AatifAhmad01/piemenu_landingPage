import React from 'react';

const StepCard = ({ step, showArrow }) => {
    const { id, title, description, icon, gradient, bgGradient, hoverColor } = step;

    return (
        <div className='group relative'>
            <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${bgGradient} rounded-bl-full opacity-60`}></div>
                
                {/* Step number */}
                <div className={`absolute top-6 left-6 w-12 h-12 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {id}
                </div>
                
                {/* Icon */}
                <div className='flex justify-center mb-6 mt-4'>
                    <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                    </div>
                </div>
                
                <div className='text-center'>
                    <h3 className={`text-2xl font-bold text-gray-800 mb-4 ${hoverColor} transition-colors duration-300`}>
                        {title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                        {description}
                    </p>
                </div>
                
                {/* Arrow for desktop */}
                {showArrow && (
                    <div className='hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2'>
                        <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center shadow-lg`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StepCard;

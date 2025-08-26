import React from 'react';

const MainFeatureCard = ({ feature }) => {
    const { title, description, icon, gradient, bgGradient, hoverColor, bulletColor, features } = feature;

    return (
        <div className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${bgGradient} rounded-bl-full opacity-60`}></div>
            
            <div className='flex items-start gap-6'>
                <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {icon}
                </div>
                <div className='flex-1'>
                    <h3 className={`text-2xl font-bold text-gray-800 mb-3 group-${hoverColor} transition-colors duration-300`}>
                        {title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed mb-4'>
                        {description}
                    </p>
                    <ul className='space-y-2'>
                        {features.map((featureItem, index) => (
                            <li key={index} className='flex items-center gap-2 text-sm text-gray-600'>
                                <div className={`w-2 h-2 ${bulletColor} rounded-full`}></div>
                                {featureItem}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainFeatureCard;

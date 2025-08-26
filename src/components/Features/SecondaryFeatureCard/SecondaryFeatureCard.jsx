import React from 'react';

const SecondaryFeatureCard = ({ feature }) => {
    const { title, description, icon, gradient, hoverColor } = feature;

    return (
        <div className='group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'>
            <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-4`}>
                {icon}
            </div>
            <h4 className={`text-lg font-semibold text-gray-800 mb-2 group-${hoverColor} transition-colors duration-300`}>
                {title}
            </h4>
            <p className='text-gray-600 text-sm leading-relaxed'>
                {description}
            </p>
        </div>
    );
};

export default SecondaryFeatureCard;

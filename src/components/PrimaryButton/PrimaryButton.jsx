import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = ({title, onClick, style, className, disabled, type = 'button'}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (title === 'Start Creating Now' || title === 'Get Started') {
            navigate('/onboarding');
        }
    };

    return (
        <>
            <button  
                type={type}
                onClick={handleClick} 
                disabled={disabled}
                className={`cursor-pointer bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className || ''}`} 
                style={style}
            >
                {title}
            </button>
        </>
    );
};

export default PrimaryButton;

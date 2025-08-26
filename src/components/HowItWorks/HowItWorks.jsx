import React from 'react';
import Circle from '../background/circle';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import StepCard from './StepCard/StepCard';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Sign Up",
            description: "Create your account in seconds with just your email and restaurant details. No complicated setup required.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            gradient: "from-blue-500 to-purple-600",
            bgGradient: "from-blue-50 to-blue-100",
            hoverColor: "hover:text-blue-600"
        },
        {
            id: 2,
            title: "Build Your Menu",
            description: "Add your food items, upload beautiful photos, and set prices. Our intuitive interface makes it easy to showcase your dishes.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            gradient: "from-green-500 to-teal-600",
            bgGradient: "from-green-50 to-green-100",
            hoverColor: "hover:text-green-600"
        },
        {
            id: 3,
            title: "Share & Get Orders",
            description: "Get your unique menu link and share it with customers. Watch your orders grow with our powerful analytics.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
            ),
            gradient: "from-purple-500 to-pink-600",
            bgGradient: "from-purple-50 to-purple-100",
            hoverColor: "hover:text-purple-600"
        }
    ];

    return (
        <section className='py-16 lg:py-24 relative'>
            <Circle size="300px" style={{backgroundColor: 'var(--primary-color)', position: 'absolute', top: '50%', transform: 'translate(-70%, -50%)', opacity: 0.1}}/>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className='text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
                        How It Works
                    </h2>
                    <p className='text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                        Create your restaurant's digital menu in just three simple steps. 
                        Get started in minutes, not hours.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto'>
                    {steps.map((step, index) => (
                        <StepCard 
                            key={step.id} 
                            step={step} 
                            showArrow={index < steps.length - 1}
                        />
                    ))}
                </div>

                {/* Call to action */}
                <div className='text-center mt-16'>
                    <div className='inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-8 py-4 border border-blue-100'>
                        <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                        <span className='text-gray-700 font-medium'>Ready to get started?</span>
                        <PrimaryButton title="Create Your Menu" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

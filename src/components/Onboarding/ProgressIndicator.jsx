import React from 'react';

const ProgressIndicator = ({ currentStep, totalSteps, steps }) => {
    const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="w-full">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>

            {/* Step Labels */}
            <div className="flex justify-between items-center">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                            index <= currentStep 
                                ? 'bg-orange-500 text-white' 
                                : 'bg-gray-200 text-gray-500'
                        }`}>
                            {index < currentStep ? (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                index + 1
                            )}
                        </div>
                        <span className={`text-xs mt-1 text-center max-w-16 ${
                            index <= currentStep ? 'text-orange-600 font-medium' : 'text-gray-500'
                        }`}>
                            {step.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressIndicator;


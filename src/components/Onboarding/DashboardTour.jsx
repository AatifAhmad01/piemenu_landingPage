import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const DashboardTour = ({ onNext, onPrevious, data }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const tourSteps = [
        {
            title: "Welcome to your Dashboard",
            description: "This is your restaurant's control center. From here, you can manage your menu, view analytics, and customize your online presence.",
            image: "📊",
            features: [
                "Menu management",
                "Analytics overview",
                "Settings & customization"
            ]
        },
        {
            title: "Menu Management",
            description: "Easily add, edit, or remove menu items. Organize them by categories and set availability.",
            image: "🍽️",
            features: [
                "Add new menu items",
                "Edit existing items",
                "Organize by categories",
                "Set item availability"
            ]
        },
        {
            title: "Analytics & Insights",
            description: "Track how customers interact with your menu. See which items are most popular and get valuable insights.",
            image: "📈",
            features: [
                "View page visits",
                "Track popular items",
                "Customer engagement",
                "Performance metrics"
            ]
        },
        {
            title: "Customization Options",
            description: "Make your menu uniquely yours. Customize colors, layout, and branding to match your restaurant's style.",
            image: "🎨",
            features: [
                "Custom colors & fonts",
                "Logo upload",
                "Layout options",
                "Brand customization"
            ]
        }
    ];

    const handleNext = () => {
        if (currentStep < tourSteps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            onNext();
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else {
            onPrevious();
        }
    };

    const handleSkip = () => {
        onNext();
    };

    const currentTourStep = tourSteps[currentStep];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard Tour</h2>
                    <p className="text-gray-600">Let's explore your new dashboard together</p>
                </div>

                {/* Tour Content */}
                <div className="mb-8">
                    <div className="text-center mb-6">
                        <div className="text-6xl mb-4">{currentTourStep.image}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{currentTourStep.title}</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">{currentTourStep.description}</p>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {currentTourStep.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mock Dashboard Preview */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gray-800">Dashboard Preview</h4>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-orange-50 rounded-lg p-4">
                                <div className="text-orange-600 text-2xl mb-2">🍽️</div>
                                <h5 className="font-medium text-gray-800">Menu Items</h5>
                                <p className="text-sm text-gray-600">Manage your menu</p>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4">
                                <div className="text-blue-600 text-2xl mb-2">📊</div>
                                <h5 className="font-medium text-gray-800">Analytics</h5>
                                <p className="text-sm text-gray-600">View insights</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4">
                                <div className="text-green-600 text-2xl mb-2">⚙️</div>
                                <h5 className="font-medium text-gray-800">Settings</h5>
                                <p className="text-sm text-gray-600">Customize your menu</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mb-8">
                    <div className="flex gap-2">
                        {tourSteps.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                    index === currentStep ? 'bg-orange-500' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleSkip}
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                    >
                        Skip Tour
                    </button>
                    <PrimaryButton
                        onClick={handleNext}
                        title={currentStep === tourSteps.length - 1 ? 'Finish Tour' : 'Next'}
                        className="flex-1"
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardTour;


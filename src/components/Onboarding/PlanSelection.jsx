import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const PlanSelection = ({ onNext, onPrevious, data }) => {
    const [selectedPlan, setSelectedPlan] = useState(data.plan || 'free');
    const [isLoading, setIsLoading] = useState(false);

    const plans = [
        {
            id: 'free',
            name: 'Free',
            price: '$0',
            period: 'forever',
            description: 'Perfect for getting started',
            features: [
                'Up to 20 menu items',
                'Basic menu display',
                'Mobile responsive',
                'Basic analytics',
                'Email support'
            ],
            limitations: [
                'Limited customization',
                'Pie Menu branding'
            ],
            popular: false,
            trialDays: null
        },
        {
            id: 'professional',
            name: 'Professional',
            price: '$19',
            period: 'month',
            description: 'Best for growing restaurants',
            features: [
                'Unlimited menu items',
                'Custom branding',
                'Advanced analytics',
                'QR code generation',
                'Priority support',
                'Menu categories',
                'Item availability toggle'
            ],
            limitations: [],
            popular: true,
            trialDays: 14
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: '$49',
            period: 'month',
            description: 'For large restaurants & chains',
            features: [
                'Everything in Professional',
                'Multi-location support',
                'Advanced integrations',
                'Custom domain',
                'API access',
                'White-label solution',
                'Dedicated account manager'
            ],
            limitations: [],
            popular: false,
            trialDays: 14
        }
    ];

    const handlePlanSelect = (planId) => {
        setSelectedPlan(planId);
    };

    const handleContinue = () => {
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            onNext({
                plan: selectedPlan
            });
        }, 1000);
    };

    const selectedPlanData = plans.find(plan => plan.id === selectedPlan);

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose your plan</h2>
                <p className="text-gray-600">Start with our free plan and upgrade anytime</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative bg-white rounded-2xl shadow-lg p-6 border-2 transition-all duration-200 cursor-pointer ${
                            selectedPlan === plan.id
                                ? 'border-orange-500 shadow-xl'
                                : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handlePlanSelect(plan.id)}
                    >
                        {/* Popular Badge */}
                        {plan.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            </div>
                        )}

                        {/* Plan Header */}
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                            <div className="mb-2">
                                <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                                <span className="text-gray-600">/{plan.period}</span>
                            </div>
                            <p className="text-sm text-gray-600">{plan.description}</p>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                            {plan.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Limitations */}
                        {plan.limitations.length > 0 && (
                            <div className="space-y-2 mb-6">
                                {plan.limitations.map((limitation, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-500">{limitation}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Trial Info */}
                        {plan.trialDays && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                                <p className="text-sm text-green-700 text-center">
                                    <span className="font-medium">{plan.trialDays}-day free trial</span>
                                    <br />
                                    No credit card required
                                </p>
                            </div>
                        )}

                        {/* Selection Indicator */}
                        <div className="flex justify-center">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                selectedPlan === plan.id
                                    ? 'border-orange-500 bg-orange-500'
                                    : 'border-gray-300'
                            }`}>
                                {selectedPlan === plan.id && (
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Plan Summary */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-800 mb-3">Selected Plan: {selectedPlanData.name}</h3>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-2xl font-bold text-gray-800">
                            {selectedPlanData.price}
                            <span className="text-sm font-normal text-gray-600">/{selectedPlanData.period}</span>
                        </p>
                        {selectedPlanData.trialDays && (
                            <p className="text-sm text-green-600 font-medium">
                                {selectedPlanData.trialDays}-day free trial included
                            </p>
                        )}
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-600">You can change your plan anytime</p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <button
                    onClick={onPrevious}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                    Back
                </button>
                <PrimaryButton
                    onClick={handleContinue}
                    title={isLoading ? 'Processing...' : 'Continue'}
                    disabled={isLoading}
                    className="flex-1"
                />
            </div>
        </div>
    );
};

export default PlanSelection;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeScreen from '../components/Onboarding/WelcomeScreen';
import AuthScreen from '../components/Onboarding/AuthScreen';
import PlanSelection from '../components/Onboarding/PlanSelection';
import RestaurantDetails from '../components/Onboarding/RestaurantDetails';
import MenuQuickStart from '../components/Onboarding/MenuQuickStart';
import DashboardTour from '../components/Onboarding/DashboardTour';
import SuccessScreen from '../components/Onboarding/SuccessScreen';
import ProgressIndicator from '../components/Onboarding/ProgressIndicator';

const Onboarding = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [onboardingData, setOnboardingData] = useState({
        user: null,
        restaurant: {},
        plan: null,
        menuItems: []
    });

    const steps = [
        { id: 'welcome', title: 'Welcome', component: WelcomeScreen },
        { id: 'auth', title: 'Authentication', component: AuthScreen },
        { id: 'plan-selection', title: 'Choose Plan', component: PlanSelection },
        { id: 'restaurant-details', title: 'Restaurant Info', component: RestaurantDetails },
        { id: 'menu-quickstart', title: 'Menu Setup', component: MenuQuickStart },
        { id: 'dashboard-tour', title: 'Dashboard Tour', component: DashboardTour },
        { id: 'success', title: 'Success', component: SuccessScreen }
    ];

    const handleNext = (data = {}) => {
        setOnboardingData(prev => ({ ...prev, ...data }));
        
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Onboarding complete, redirect to dashboard
            navigate('/dashboard');
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSkip = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const CurrentComponent = steps[currentStep].component;

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
            {/* Progress Indicator */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <ProgressIndicator 
                        currentStep={currentStep} 
                        totalSteps={steps.length}
                        steps={steps}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <CurrentComponent
                    data={onboardingData}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    onSkip={handleSkip}
                    currentStep={currentStep}
                    totalSteps={steps.length}
                />
            </div>
        </div>
    );
};

export default Onboarding;

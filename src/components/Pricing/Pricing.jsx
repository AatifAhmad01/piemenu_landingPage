import React from 'react';
import PricingCard from './PricingCard/PricingCard';
import PricingFooter from './PricingFooter/PricingFooter';

const Pricing = () => {
    const plans = [
        {
            id: 'starter',
            name: 'Starter',
            price: '$0',
            period: '/month',
            description: 'Perfect for small restaurants getting started',
            features: [
                { name: '10 Menu Items', included: true },
                { name: 'Online digital menu', included: true },
                { name: '1,000 views per month', included: true },
                { name: '100 orders per month', included: true },
                { name: 'Basic analytics', included: true },
                { name: 'Table reservations', included: false },
                { name: 'Priority support', included: false }
            ],
            buttonText: 'Get Started Free',
            buttonStyle: 'w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 border border-gray-200',
            featured: false,
            bgGradient: 'from-gray-50 to-gray-100'
        },
        {
            id: 'professional',
            name: 'Professional',
            price: '$29',
            period: '/month',
            description: 'Perfect for growing restaurants',
            features: [
                { name: 'Everything in Starter', included: true },
                { name: 'Unlimited Menu Items', included: true },
                { name: 'Unlimited views & orders', included: true },
                { name: 'Advanced analytics', included: true },
                { name: 'Table reservations', included: true },
                { name: 'Email support', included: true },
                { name: 'Custom branding', included: true }
            ],
            buttonText: 'Start Free Trial',
            buttonStyle: 'w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl',
            featured: true,
            bgGradient: 'from-blue-50 to-purple-100'
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: '$99',
            period: '/month',
            description: 'For large restaurant chains',
            features: [
                { name: 'Everything in Professional', included: true },
                { name: 'Multi-location support', included: true },
                { name: 'Priority phone support', included: true },
                { name: 'Advanced integrations', included: true },
                { name: 'Custom API access', included: true },
                { name: 'Dedicated account manager', included: true }
            ],
            buttonText: 'Contact Sales',
            buttonStyle: 'w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 border border-gray-200',
            featured: false,
            bgGradient: 'from-purple-50 to-purple-100'
        }
    ];

    return (
        <section className='py-16 lg:py-24 relative bg-gradient-to-br from-gray-50 to-white'>
            {/* Background decorations */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-10 blur-3xl"></div>
            
            <div className='container mx-auto px-4 relative z-10'>
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200 mb-6'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
                        <span className='text-sm font-medium'>Simple Pricing</span>
                    </div>
                    <h2 className='text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
                        Choose Your
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> Plan</span>
                    </h2>
                    <p className='text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                        Start free and scale as you grow. No hidden fees, no surprises. 
                        Cancel anytime with full refund within 30 days.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16'>
                    {plans.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} />
                    ))}
                </div>

                {/* Additional Info */}
                <PricingFooter />
            </div>
        </section>
    );
};

export default Pricing;

import React from 'react';
import MainFeatureCard from './MainFeatureCard/MainFeatureCard';
import SecondaryFeatureCard from './SecondaryFeatureCard/SecondaryFeatureCard';

const Features = () => {
    const mainFeatures = [
        {
            id: 1,
            title: "Digital Menu Creation",
            description: "Create stunning digital menus in minutes with our intuitive drag-and-drop editor. Add beautiful photos, descriptions, and pricing with just a few clicks.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            gradient: "from-blue-500 to-purple-600",
            bgGradient: "from-blue-50 to-blue-100",
            hoverColor: "hover:text-blue-600",
            bulletColor: "bg-blue-500",
            features: [
                "Drag-and-drop menu builder",
                "High-quality image optimization",
                "Real-time menu updates"
            ]
        },
        {
            id: 2,
            title: "Online Ordering System",
            description: "Accept orders 24/7 with our seamless online ordering platform. Customers can browse, customize, and pay for their orders effortlessly.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            gradient: "from-green-500 to-teal-600",
            bgGradient: "from-green-50 to-green-100",
            hoverColor: "hover:text-green-600",
            bulletColor: "bg-green-500",
            features: [
                "24/7 order acceptance",
                "Customizable order options",
                "Secure payment processing"
            ]
        },
        {
            id: 3,
            title: "Smart Table Reservations",
            description: "Automate your reservation system with intelligent scheduling. No more phone calls or manual booking management.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            gradient: "from-purple-500 to-pink-600",
            bgGradient: "from-purple-50 to-purple-100",
            hoverColor: "hover:text-purple-600",
            bulletColor: "bg-purple-500",
            features: [
                "Automated booking system",
                "Real-time availability updates",
                "Customer confirmation emails"
            ]
        },
        {
            id: 4,
            title: "Advanced Analytics",
            description: "Get deep insights into your business performance with comprehensive analytics. Track sales, customer behavior, and optimize your operations.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            gradient: "from-orange-500 to-red-600",
            bgGradient: "from-orange-50 to-orange-100",
            hoverColor: "hover:text-orange-600",
            bulletColor: "bg-orange-500",
            features: [
                "Sales performance tracking",
                "Customer behavior insights",
                "Revenue optimization tools"
            ]
        }
    ];

    const secondaryFeatures = [
        {
            id: 1,
            title: "Availability Management",
            description: "Set your operating hours and let customers know when you're open. Automatic status updates keep everyone informed.",
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: "from-indigo-500 to-blue-600",
            hoverColor: "hover:text-indigo-600"
        },
        {
            id: 2,
            title: "Customer Feedback",
            description: "Collect reviews and ratings to improve your service. Build trust with potential customers through authentic feedback.",
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            gradient: "from-pink-500 to-rose-600",
            hoverColor: "hover:text-pink-600"
        },
        {
            id: 3,
            title: "Multi-Location Support",
            description: "Manage multiple restaurant locations from a single dashboard. Scale your business efficiently with centralized control.",
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            gradient: "from-emerald-500 to-green-600",
            hoverColor: "hover:text-emerald-600"
        }
    ];

    return (
        <section className='py-16 lg:py-24 relative' id='features'>
            {/* Background decorations */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl z-20"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-10 blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200 mb-6'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
                        <span className='text-sm font-medium'>Powerful Features</span>
                    </div>
                    <h2 className='text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
                        Everything You Need to
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> Succeed</span>
                    </h2>
                    <p className='text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                        Transform your restaurant with our comprehensive suite of features designed to boost sales, 
                        streamline operations, and delight your customers.
                    </p>
                </div>

                {/* Main Features Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mb-16'>
                    {mainFeatures.map((feature) => (
                        <MainFeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>

                {/* Additional Features Row */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
                    {secondaryFeatures.map((feature) => (
                        <SecondaryFeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

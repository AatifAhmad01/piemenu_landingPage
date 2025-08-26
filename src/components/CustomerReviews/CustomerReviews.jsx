import React from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import ReviewStats from './ReviewStats/ReviewStats';
import ReviewCTA from './ReviewCTA/ReviewCTA';

const CustomerReviews = () => {
    const reviews = [
        {
            id: 1,
            rating: 5,
            content: "PieMenu completely transformed how we handle orders. Our revenue increased by 40% in just 3 months. The setup was incredibly easy and our customers love the sleek digital menu!",
            customer: {
                name: "Sarah Johnson",
                title: "Owner, Bella's Bistro",
                initial: "S"
            },
            gradient: "from-blue-500 to-purple-600",
            bgGradient: "from-yellow-50 to-yellow-100",
            quoteGradient: "from-yellow-400 to-orange-500"
        },
        {
            id: 2,
            rating: 5,
            content: "The analytics dashboard is a game-changer! I can see exactly which dishes are popular and optimize my menu accordingly. Customer feedback has never been easier to collect and manage.",
            customer: {
                name: "Mike Rodriguez",
                title: "Chef & Owner, Spice Kitchen",
                initial: "M"
            },
            gradient: "from-green-500 to-teal-600",
            bgGradient: "from-green-50 to-green-100",
            quoteGradient: "from-green-400 to-teal-500"
        },
        {
            id: 3,
            rating: 5,
            content: "Our customers absolutely love the convenience of online ordering and table reservations. We've eliminated wait times and improved customer satisfaction significantly. Highly recommended!",
            customer: {
                name: "Emily Chen",
                title: "Manager, Golden Dragon",
                initial: "E"
            },
            gradient: "from-purple-500 to-pink-600",
            bgGradient: "from-purple-50 to-purple-100",
            quoteGradient: "from-purple-400 to-pink-500"
        },
        {
            id: 4,
            rating: 4,
            content: "As a busy cafe owner, PieMenu has been a lifesaver. The setup was quick, and our staff adapted to it immediately. The customer support is excellent too!",
            customer: {
                name: "David Kim",
                title: "Owner, Sunrise Cafe",
                initial: "D"
            },
            gradient: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-50 to-blue-100",
            quoteGradient: "from-blue-400 to-indigo-500"
        },
        {
            id: 5,
            rating: 5,
            content: "The multi-location support is fantastic! I can manage all three of my restaurants from one dashboard. It's saved me countless hours and streamlined our entire operation.",
            customer: {
                name: "Anna Martinez",
                title: "CEO, Martinez Restaurant Group",
                initial: "A"
            },
            gradient: "from-orange-500 to-red-600",
            bgGradient: "from-orange-50 to-orange-100",
            quoteGradient: "from-orange-400 to-red-500"
        },
        {
            id: 6,
            rating: 5,
            content: "PieMenu helped us go digital during the pandemic and we never looked back. Our ordering process is now seamless and our customers appreciate the contactless experience.",
            customer: {
                name: "Robert Thompson",
                title: "Owner, Thompson's Grill",
                initial: "R"
            },
            gradient: "from-teal-500 to-cyan-600",
            bgGradient: "from-teal-50 to-teal-100",
            quoteGradient: "from-teal-400 to-cyan-500"
        }
    ];

    const stats = [
        { value: "4.9★", label: "Average Rating", color: "text-blue-600" },
        { value: "2,500+", label: "Happy Customers", color: "text-green-600" },
        { value: "98%", label: "Satisfaction Rate", color: "text-purple-600" },
        { value: "150+", label: "Cities Worldwide", color: "text-orange-600" }
    ];

    return (
        <section className='py-16 lg:py-24 relative bg-gradient-to-br from-gray-50 to-white'>
            {/* Background decorations */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-10 blur-3xl"></div>
            
            <div className='container mx-auto px-4 relative z-10'>
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200 mb-6'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
                        <span className='text-sm font-medium'>Customer Stories</span>
                    </div>
                    <h2 className='text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
                        What Our
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> Customers Say</span>
                    </h2>
                    <p className='text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                        Join thousands of restaurant owners who have transformed their business with our platform. 
                        Here's what they have to say about their experience.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16'>
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                {/* Overall Stats */}
                <ReviewStats stats={stats} />

                {/* Call to Action */}
                <ReviewCTA />
            </div>
        </section>
    );
};

export default CustomerReviews;

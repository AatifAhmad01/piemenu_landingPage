import React from 'react';
import WebView from '../../../assets/images/web-view.png';
import StatsCard from './StatsCard/StatsCard';

const DashboardImage = () => {
    const stats = [
        {
            id: 1,
            value: "+127%",
            label: "Orders",
            color: "text-green-600",
            position: "absolute -top-4 -right-4"
        },
        {
            id: 2,
            value: "4.9★",
            label: "Rating",
            color: "text-blue-600",
            position: "absolute -bottom-4 -left-4"
        }
    ];

    return (
        <div className="relative">
            {/* Main Dashboard Image */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <img src={WebView} alt="Dashboard Preview" className="w-full rounded-lg shadow-lg" />
                </div>
                
                {/* Floating Stats Cards */}
                {stats.map((stat) => (
                    <StatsCard key={stat.id} stat={stat} />
                ))}
            </div>
            
            {/* Background decoration elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 blur-xl"></div>
        </div>
    );
};

export default DashboardImage;

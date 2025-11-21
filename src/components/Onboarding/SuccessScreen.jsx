import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const SuccessScreen = ({ onNext, data }) => {
    const handleGoToDashboard = () => {
        onNext();
    };

    const handleShareMenu = () => {
        // In a real app, this would generate and share the menu URL
        navigator.clipboard.writeText('https://piemenu.com/your-restaurant');
        alert('Menu URL copied to clipboard!');
    };

    return (
        <div className="max-w-2xl mx-auto text-center py-12">
            {/* Success Animation */}
            <div className="mb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Congratulations!</h1>
                <p className="text-gray-600 text-lg">
                    Your restaurant menu is now live and ready to share with customers
                </p>
            </div>

            {/* Restaurant Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Your Menu Summary</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Restaurant Details</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p><span className="font-medium">Name:</span> {data.restaurant?.name || 'Your Restaurant'}</p>
                            <p><span className="font-medium">Service:</span> {data.restaurant?.serviceType || 'All Services'}</p>
                            <p><span className="font-medium">Plan:</span> {data.plan || 'Free'}</p>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Menu Items</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p><span className="font-medium">Total Items:</span> {data.menuItems?.length || 0}</p>
                            <p><span className="font-medium">Categories:</span> {new Set(data.menuItems?.map(item => item.category)).size || 0}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Next Steps */}
            <div className="bg-orange-50 rounded-2xl p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">What's Next?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">Share Your Menu</h3>
                        <p className="text-sm text-gray-600 mb-3">Share your menu URL with customers</p>
                        <button
                            onClick={handleShareMenu}
                            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm font-medium"
                        >
                            Copy Link
                        </button>
                    </div>

                    <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">Customize Design</h3>
                        <p className="text-sm text-gray-600">Make your menu uniquely yours</p>
                    </div>

                    <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">View Analytics</h3>
                        <p className="text-sm text-gray-600">Track customer engagement</p>
                    </div>
                </div>
            </div>

            {/* Support */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-800 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                    Our support team is here to help you get the most out of your menu
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">
                        📧 Email Support
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">
                        💬 Live Chat
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">
                        📚 Help Center
                    </button>
                </div>
            </div>

            {/* Final CTA */}
            <div className="space-y-4">
                <PrimaryButton
                    title="Go to Dashboard"
                    onClick={handleGoToDashboard}
                    className="w-full sm:w-auto"
                />
                <p className="text-sm text-gray-500">
                    You can always come back to edit your menu and settings
                </p>
            </div>
        </div>
    );
};

export default SuccessScreen;


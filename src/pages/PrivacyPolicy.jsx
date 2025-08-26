import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';

const PrivacyPolicy = () => {
    const lastUpdated = "December 2024";

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
                <div className="container mx-auto px-4 py-12 max-w-4xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-gray-600">
                            Last updated: {lastUpdated}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-8">
                            
                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    At PieMenu, we are committed to protecting your privacy and ensuring the security of your personal information. 
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                                    digital menu and restaurant ordering platform.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                                
                                <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Name, email address, and phone number</li>
                                    <li>Payment information (processed securely through third-party providers)</li>
                                    <li>Delivery or pickup address</li>
                                    <li>Account credentials and preferences</li>
                                </ul>

                                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Usage Information</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Order history and preferences</li>
                                    <li>Device information and IP address</li>
                                    <li>Browser type and operating system</li>
                                    <li>Pages visited and features used</li>
                                    <li>Location data (with your consent)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Process and fulfill your orders</li>
                                    <li>Provide customer support and respond to inquiries</li>
                                    <li>Send order confirmations and updates</li>
                                    <li>Improve our services and user experience</li>
                                    <li>Send promotional communications (with your consent)</li>
                                    <li>Comply with legal obligations</li>
                                    <li>Prevent fraud and ensure platform security</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Restaurant Partners:</strong> Order details necessary for fulfillment</li>
                                    <li><strong>Payment Processors:</strong> Secure payment processing</li>
                                    <li><strong>Delivery Services:</strong> Delivery information when applicable</li>
                                    <li><strong>Service Providers:</strong> Analytics, customer support, and technical services</li>
                                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We implement industry-standard security measures to protect your personal information, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                                    <li>SSL encryption for data transmission</li>
                                    <li>Secure servers and databases</li>
                                    <li>Regular security audits and updates</li>
                                    <li>Limited access to personal information</li>
                                    <li>Employee training on data protection</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You have the following rights regarding your personal information:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                                    <li><strong>Portability:</strong> Receive your data in a portable format</li>
                                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                                    <li><strong>Restriction:</strong> Limit how we process your data</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. 
                                    You can control cookie settings through your browser preferences. Essential cookies are necessary for the platform 
                                    to function properly.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
                                    resolve disputes, and enforce our agreements. Order history may be retained for accounting and legal purposes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information 
                                    from children under 13. If we become aware that we have collected such information, we will delete it promptly.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Users</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    If you are accessing our services from outside your country, please note that your information may be transferred 
                                    to and stored in servers located in different jurisdictions. We ensure appropriate safeguards are in place for 
                                    international data transfers.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the 
                                    new policy on this page and updating the "Last updated" date. Your continued use of our services after such 
                                    changes constitutes acceptance of the updated policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                    <p className="text-gray-700"><strong>Email:</strong> privacy@piemenu.com</p>
                                    <p className="text-gray-700"><strong>Address:</strong> PieMenu Legal Department</p>
                                    <p className="text-gray-700">123 Tech Street, Suite 100</p>
                                    <p className="text-gray-700">Digital City, DC 12345</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;

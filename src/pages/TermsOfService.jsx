import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';

const TermsOfService = () => {
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
                            Terms of Service
                        </h1>
                        <p className="text-lg text-gray-600">
                            Last updated: {lastUpdated}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-8">
                            
                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    By accessing and using PieMenu ("we," "our," or "us"), you accept and agree to be bound by the terms 
                                    and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    PieMenu is a digital menu and restaurant ordering platform that enables customers to browse menus, 
                                    place orders, and make payments online. We provide restaurants with tools to manage their digital 
                                    presence and streamline their ordering process.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>
                                
                                <h3 className="text-xl font-medium text-gray-800 mb-3">Account Creation</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>You must provide accurate and complete information when creating an account</li>
                                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                                    <li>You must be at least 18 years old to create an account</li>
                                    <li>One account per person is permitted</li>
                                </ul>

                                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Account Responsibilities</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>You are responsible for all activities under your account</li>
                                    <li>Notify us immediately of any unauthorized use</li>
                                    <li>Keep your account information current and accurate</li>
                                    <li>You may not share your account with others</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ordering and Payment</h2>
                                
                                <h3 className="text-xl font-medium text-gray-800 mb-3">Order Process</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Orders are subject to acceptance by the restaurant</li>
                                    <li>Prices and availability are subject to change without notice</li>
                                    <li>We reserve the right to limit order quantities</li>
                                    <li>Orders cannot be modified once confirmed by the restaurant</li>
                                </ul>

                                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Payment Terms</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Payment is required at the time of order placement</li>
                                    <li>We accept major credit cards and approved payment methods</li>
                                    <li>All prices are in the local currency unless otherwise stated</li>
                                    <li>Service fees and taxes may apply</li>
                                    <li>Refunds are subject to our refund policy</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation and Refund Policy</h2>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Orders may be cancelled within 5 minutes of placement if not yet confirmed</li>
                                    <li>Refunds for cancelled orders will be processed within 3-5 business days</li>
                                    <li>Restaurant-initiated cancellations will result in automatic refunds</li>
                                    <li>Complaints about food quality should be directed to the restaurant first</li>
                                    <li>We may issue refunds at our discretion for service-related issues</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Uses</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">You may not use our service:</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                                    <li>To submit false or misleading information</li>
                                    <li>To upload or transmit viruses or any other type of malicious code</li>
                                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                                    <li>For any obscene or immoral purpose</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property Rights</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    The service and its original content, features, and functionality are and will remain the exclusive property 
                                    of PieMenu and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks 
                                    and trade dress may not be used in connection with any product or service without our prior written consent.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">User-Generated Content</h2>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>You retain ownership of content you submit (reviews, comments, etc.)</li>
                                    <li>You grant us a license to use, display, and distribute your content</li>
                                    <li>You are responsible for the content you post</li>
                                    <li>We reserve the right to remove content that violates our policies</li>
                                    <li>Content must not be offensive, illegal, or infringe on others' rights</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy Policy</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                                    to understand our practices.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    The information on this platform is provided on an "as is" basis. To the fullest extent permitted by law, 
                                    PieMenu excludes all representations, warranties, conditions, and terms whether express, implied, or 
                                    statutory, including but not limited to the implied warranties of merchantability, fitness for a particular 
                                    purpose, and non-infringement.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    In no event shall PieMenu, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
                                    for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of 
                                    profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    You agree to defend, indemnify, and hold harmless PieMenu and its licensee and licensors, and their employees, 
                                    contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, 
                                    liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We may terminate or suspend your account and bar access to the service immediately, without prior notice or 
                                    liability, under our sole discretion, for any reason whatsoever and without limitation, including but not 
                                    limited to a breach of the Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    These Terms shall be interpreted and governed by the laws of the jurisdiction where our company is incorporated, 
                                    without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms 
                                    will not be considered a waiver of those rights.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
                                    material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a 
                                    material change will be determined at our sole discretion.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                    <p className="text-gray-700"><strong>Email:</strong> legal@piemenu.com</p>
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

export default TermsOfService;

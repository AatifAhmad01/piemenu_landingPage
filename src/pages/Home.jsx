import React from 'react';
import Hero from '../components/Hero/Hero';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import DashboardPreview from '../components/DashboardPreview/DashboardPreview';
import Features from '../components/Features/Features';
import Pricing from '../components/Pricing/Pricing';
import CustomerReviews from '../components/CustomerReviews/CustomerReviews';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <main>
                <Hero />
                <HowItWorks />
                <DashboardPreview />
                <Features />
                <Pricing />
                <CustomerReviews />
            </main>
            <Footer />
        </>
    );
};

export default Home;
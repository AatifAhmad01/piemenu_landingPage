import React, { useState } from 'react';
import Circle from '../components/background/circle';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';
import FoodCard from '../components/FoodCard/FoodCard';
import Burger from '../assets/images/burger.webp';
import WebView from '../assets/images/web-view.png';
import MobileView from '../assets/images/mobile-view.png';
import StepCard from '../components/StepCard/StepCard';
import MenuProjectCard from '../components/MenuProjectCard/MenuProjectCard';
import PrimaryButtonLight from '../components/PrimaryButtonLight/PrimaryButtonLight';
import FeedbackCard from '../components/FeedbackCard/FeedbackCard';


const Home = () => {

    const [selectedStep, setSelectedStep] = useState(1);
    

    const onClcikStep = (id) => {
        setSelectedStep(id);
    }

    return (
        <>
            <main>
                {/* Hero Section */}

                <section>
                    <div className='hero-bg-design'>
                        <Circle size="200px" style={{backgroundColor: 'var(--primary-color)', position: 'absolute', top: '-130px'}}/>
                        <Circle size="1100px" style={{background: 'var(--primary-color)', position: 'absolute', bottom: '-300px', right: '-200px'}}/>
                    </div>

                    <div className="container-xxl">

                        <div className="row" style={{height: '800px'}}>
                            <div className='col-12 col-lg-6 flex-column' style={{alignItems: 'flex-start', justifyContent: 'space-around'}}>
                                <div className="row" >
                                    <div className="" style={{}}>
                                        <h1 style={{fontSize: '4rem', fontFamily: 'Lovelo'}}>TURN YOUR STORE</h1>
                                        <h1 style={{fontSize: '4rem', fontFamily: 'Lovelo'}}>ONLINE</h1>
                                    </div>

                                </div>

                                <div>
                                    <h3>List Your Menu</h3>
                                    <div style={{display: 'flex', gap: '20px'}}>
                                        <FoodCard image={Burger} />
                                        <FoodCard image={Burger}/>
                                        <FoodCard image={Burger}/>
                                    </div>
                                    <PrimaryButton title={'Get Now'}/>

                                </div>
                            </div>


                            <div className='col-12 col-lg-6 flex' position='relative' >
                                <div className='flex' style={{justifyContent: 'flex-end', alignItems: 'center', width: '100%'}}>
                                    <img src={MobileView} alt="mobile-web-view" style={{width: '40%', transform: 'translate(100px, 140px)'}}/>
                                    <img src={WebView} alt="menu-web-view" style={{width: '80%', marginTop: '30px'}}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Overflow */}
                <section className='pd-v-100' style={{position: 'relative'}}>
                    <Circle size="300px" style={{backgroundColor: 'var(--primary-color)', position: 'absolute', top: '50%', transform: 'translate(-70%, -50%)'}}/>

                    <div className="container" style={{marginTop: '100px'}}>
                        <div className="row">

                            <div className="col-12 col-lg-6">
                                <StepCard data={{step: 1, title: 'Fill in a short form', description: 'Provide your restaurant information, Send your restaurant menu'}}
                                    isSelected={selectedStep == 1} onClick={() => onClcikStep(1)}/>
                                <StepCard data={{step: 2, title: 'We built it', description: 'Our team will build your restaurant page with your food items in 24 hours'}}
                                    isSelected={selectedStep == 2} onClick={() => onClcikStep(2)}/>
                                <StepCard data={{step: 3, title: 'Share with your customers', description: 'You will get a link to your new online restaurant which you can share on your social media and customers'}}
                                    isSelected={selectedStep == 3} onClick={() => onClcikStep(3)}/>
                            </div>
                            <div className="col-12 col-lg-6 flex-center">
                                <img src={MobileView} alt="" style={{height: '700px'}}/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Menu Showcase */}
                <section className='' style={{backgroundColor: '#222222', height: '750px'}}>
                    <div className='container ' >
                        <h3 className='text-center clr-light' style={{fontSize: '3rem', padding: '60px 0'}}>Built With Pie Menu</h3>

                        <div className='flex' style={{justifyContent: 'space-around'}}>
                            <MenuProjectCard />
                            <MenuProjectCard />
                            <MenuProjectCard />
                        </div>
                        <div className='flex-center pd-20'  style={{marginTop: '20px'}}>
                            <PrimaryButtonLight title={'Try Now'}/>
                        </div>
                    </div>
                </section>

                <section className='pd-v-100'>
                    <div className="container">

                        <h3 className='text-center ' style={{fontSize: '3rem', marginBottom: '40px'}}>Clients' Feedback</h3>


                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <FeedbackCard/>
                                <FeedbackCard/>
                                <FeedbackCard/>
                            </div>

                            <div className="col-12 col-lg-6">
                                <FeedbackCard/>
                                <FeedbackCard/>
                                <FeedbackCard/>
                            </div>
                        </div>
                    </div>
                </section>



            </main>
        </>
    );
};

export default Home;

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
import TextInput from '../components/Input/TextInput';
import FoodOrderItem from '../components/FoodOrderItem/FoodOrderItem';
import Cursor from '../assets/icons/click.png';
import StepCardMobile from '../components/StepCardMobile/StepCardMobile';
import Footer from '../components/Footer/Footer.jsx';
import Hero from '../components/Hero/Hero';


const Home = () => {

    const [selectedStep, setSelectedStep] = useState(1);
    

    const onClickStep = (id) => {
        setSelectedStep(id);
    }

    return (
        <>
            <main className=''>
                <Hero />

                {/* How It Works Section */}
                <section className='pd-v-50' style={{position: 'relative'}}>
                    <Circle size="300px" style={{backgroundColor: 'var(--primary-color)', position: 'absolute', top: '50%', transform: 'translate(-70%, -50%)'}}/>

                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className='text-4xl lg:text-5xl font-bold mb-4'>How It Works</h2>
                            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>Create your restaurant's digital menu in just three simple steps</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p>Create free account</p>
                        </div>
                    </div>
                </section>

                {/* Overflow */}
                {/* <section className='pd-v-50' style={{position: 'relative'}}>
                    <Circle size="300px" style={{backgroundColor: 'var(--primary-color)', position: 'absolute', top: '50%', transform: 'translate(-70%, -50%)'}}/>

                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">

                            <div className="w-full lg:w-6/12 hidden lg:block">
                                <StepCard data={{step: 1, title: 'Fill in a short form', description: 'Provide your restaurant information, Send your restaurant menu'}}
                                    isSelected={selectedStep == 1} onClick={() => onClickStep(1)}/>
                                <StepCard data={{step: 2, title: 'We built it', description: 'Our team will build your restaurant page with your food items in 24 hours'}}
                                    isSelected={selectedStep == 2} onClick={() => onClickStep(2)}/>
                                <StepCard data={{step: 3, title: 'Share with your customers', description: 'You will get a link to your new online restaurant which you can share on your social media and customers'}}
                                    isSelected={selectedStep == 3} onClick={() => onClickStep(3)}/>
                            </div>

                            <div className="w-full lg:w-6/12 flex justify-center items-center">
                                <img src={MobileView} alt="" style={{height: '600px'}}/>
                            </div>

                            <div className='p-4 block lg:hidden'>
                                <StepCardMobile data={{step: 1, title: 'Fill in a short form', description: 'Give a little details about your restaurant'}}
                                    isSelected={selectedStep == 1}  onClick={() => onClickStep(1)}/>
                                <StepCardMobile data={{step: 2, title: 'We built it', description: 'Hellow'}}
                                    isSelected={selectedStep == 2}  onClick={() => onClickStep(2)}/>
                                <StepCardMobile data={{step: 3, title: 'Share with your customers', description: 'Hellow'}}
                                    isSelected={selectedStep == 3}  onClick={() => onClickStep(3)}/>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Menu Showcase */}
                {/* <section className='pd-v-50' style={{backgroundColor: '#222222'}}>
                    <div className='container mx-auto px-4'>
                        <h3 className='text-5xl font-bold mb-10' style={{color: 'var(--light-color)'}}>Built with pie menu</h3>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12">
                                <MenuProjectCard />
                            </div>
                            <div className="w-full lg:w-4/12 hidden lg:block">
                                <MenuProjectCard />
                            </div>
                            <div className="w-full lg:w-4/12 hidden lg:block">
                                <MenuProjectCard />
                            </div>
                        </div>
                        <div className='flex justify-center items-center pd-20'  style={{marginTop: '20px'}}>
                            <PrimaryButtonLight title={'Try Now'}/>
                        </div>
                    </div>
                </section> */}

                {/* Client Reviews */}
                {/* <section className='pd-v-50'>
                    <div className="container mx-auto px-4">

                        <h3 className='text-5xl font-bold mb-4 lg:mb-4'>Clients' Feedback</h3>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12">
                                <FeedbackCard />
                                <FeedbackCard pos={'left'}/>
                                <FeedbackCard/>
                            </div>

                            <div className="w-full lg:w-6/12 hidden lg:block">
                                <FeedbackCard/>
                                <FeedbackCard pos={'right'}/>
                                <FeedbackCard/>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Whats Next */}
                {/* <section className='pd-v-50' style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center">

                            <div className="w-full lg:w-5/12">
                                <h3 className='text-5xl font-bold text-left lg:text-left text-center clr-light mb-0 lg:mb-0 mb-4 sm:mb-4' >What's Next</h3>
                                
                                <div className='block lg:hidden' style={{margin: '20px 0'}}></div>
                                <p className='text-center clr-light m-0 p-0' style={{padding: '10px 0', fontSize: '1.2em'}}>{'You will get a link to your new online restaurant which you can share on your social media and customers'}</p>

                                <div className='p-0 sm:p-0' style={{display: 'flex', gap: '20px'}}>
                                    <TextInput type={'email'} placeholder={'Email'}/>
                                    <div className=' hidden lg:block'>
                                        <PrimaryButton title={'Notify Me'} style={{height: '100%'}}/>
                                    </div>
                                </div>
                                <div className='block lg:hidden p-2' >
                                    <div className='flex justify-center' style={{marginTop: '10px'}}>
                                        <PrimaryButton title={'Notify Me'}/>
                                    </div>
                                </div>
                                <div className='block lg:hidden' style={{margin: '20px 0'}}></div>

                                <div className="w-full lg:w-5/12 block lg:hidden" style={{marginBottom: '30px'}}>
                                    <div className="flex flex-wrap">
                                        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                            <div className="w-4/12 lg:w-3/12">
                                                <FoodOrderItem image={Burger}/>
                                            </div>
                                            <div className="w-4/12" style={{position: 'relative'}}>
                                                <FoodOrderItem image={Burger}/>
                                                <img src={Cursor} alt="" style={{position: 'absolute', width: '40px', height: '40px', bottom: '-5%', left: '75%'}}/>
                                            </div>

                                            <div className="w-4/12 lg:w-3/12">
                                                <FoodOrderItem image={Burger}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="w-full lg:w-2/12 hidden lg:block">

                            </div>
                            <div className="w-full lg:w-5/12 md:w-6/12 hidden lg:block">
                                <div className="flex flex-wrap" >
                                    <div style={{display: 'flex', gap: '20px', justifyContent: 'flex-end', alignItems: 'center'}}>
                                        <div className="w-4/12 lg:w-3/12">
                                            <FoodOrderItem image={Burger}/>
                                        </div>
                                        <div className="w-4/12" style={{position: 'relative'}}>
                                            <FoodOrderItem image={Burger}/>
                                            <img src={Cursor} alt="" style={{position: 'absolute', width: '40px', height: '40px', bottom: '-5%', left: '75%'}}/>
                                        </div>

                                        <div className="w-4/12 lg:w-3/12">
                                            <FoodOrderItem image={Burger}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Bottom details */}
                {/* <section className='pd-v-50' >
                    <div className="container mx-auto px-4">
                        <div style={{display: 'flex', gap: '20px',flexDirection: 'column', alignItems: 'center'}}>
                            <h3 className='text-5xl font-bold m-0' style={{marginBottom: 0}}>Easy Menu</h3>
                            <p className='text-center m-0 p-0' style={{padding: '10px 0', fontSize: '1.2em', maxWidth: '500px'}}>{'You will get a link to your new online restaurant which you can share on your social media and customers'}</p>
                            <PrimaryButton title={"Register Now"}/>
                        </div>
                    </div>
                </section> */}

                {/* <Footer /> */}
            </main>
        </>
    );
};

export default Home;

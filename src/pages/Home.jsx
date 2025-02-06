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
                        <div className='d-none d-lg-block'>
                            <Circle size="1100px" style={{background: 'var(--primary-color)', position: 'absolute', bottom: '-300px', right: '-200px'}}/>
                        </div>
                    </div>

                    <div className="container-xxl">

                        <div className="row pd-v-100 pb-0">
                            <div className='col-12 col-md-8 col-lg-6 p-sm-4 flex-column' style={{alignItems: 'flex-start', justifyContent: 'center', gap: '40px'}}>
                                <div className="row" >
                                    <div className="" style={{}}>
                                        <h1 className='display-3' style={{fontFamily: 'Lovelo', color: 'var(--primary-color)'}}>get your online menu</h1>
                                        <p style={{width: '100%', maxWidth: '400px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat nemo optio vitae enim cumque, illum assumenda odit reinde eum? Voluptate.</p>
                                    </div>
                                </div>
                                <div style={{width: '100%'}}>
                                    <h3>List Your Menu</h3>
                                    <div className='hero-foodcard-cont' style={{overflow: 'auto', width: '100%'}}>
                                        <div style={{display: 'flex', gap: '20px'}}>
                                            <FoodCard image={Burger} />
                                            <FoodCard image={Burger}/>
                                            <FoodCard image={Burger}/>
                                        </div>
                                        <div className='d-none d-md-block'>

                                            <PrimaryButton title={'Get Now'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='d-block d-md-none' style={{}}>
                                <PrimaryButton title={'Get Now'} style={{width: '100%', height: '65px', fontSize: '1.4em'}}/>
                            </div>

                            <div className="col-lg-1 d-none d-lg-block"></div>

                            <div className='col-12 col-md-4 col-lg-5 flex' style={{alignSelf: 'center'}}>
                                <div className='flex' style={{justifyContent: 'flex-end', alignItems: 'center', width: '100%', position: 'relative'}}>
                                    <div className='mobile-web-view-cont ' >
                                        <img src={MobileView} alt="mobile-web-view" style={{width: '100%'}}/>
                                    </div>
                                    <div className='d-none d-lg-block' style={{width: '90%'}}>
                                        <img src={WebView} alt="menu-web-view" style={{width: '100%', marginTop: '30px'}}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Overflow */}
                <section className='pd-v-50' style={{position: 'relative'}}>
                    <Circle size="300px" style={{backgroundColor: 'var(--primary-color)', position: 'absolute', top: '50%', transform: 'translate(-70%, -50%)'}}/>

                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 d-none d-lg-block">
                                <StepCard data={{step: 1, title: 'Fill in a short form', description: 'Provide your restaurant information, Send your restaurant menu'}}
                                    isSelected={selectedStep == 1} onClick={() => onClcikStep(1)}/>
                                <StepCard data={{step: 2, title: 'We built it', description: 'Our team will build your restaurant page with your food items in 24 hours'}}
                                    isSelected={selectedStep == 2} onClick={() => onClcikStep(2)}/>
                                <StepCard data={{step: 3, title: 'Share with your customers', description: 'You will get a link to your new online restaurant which you can share on your social media and customers'}}
                                    isSelected={selectedStep == 3} onClick={() => onClcikStep(3)}/>
                            </div>

                            <div className="col-12 col-lg-6 flex-center">
                                <img src={MobileView} alt="" style={{height: '600px'}}/>
                            </div>

                            <div className='pd-4 d-block d-lg-none'>
                                <StepCardMobile data={{step: 1, title: 'Fill in a short form', description: 'Give a little details about your restaurant'}}
                                    isSelected={selectedStep == 1}  onClick={() => onClcikStep(1)}/>
                                <StepCardMobile data={{step: 2, title: 'We built it', description: 'Hellow'}}
                                    isSelected={selectedStep == 2}  onClick={() => onClcikStep(2)}/>
                                <StepCardMobile data={{step: 3, title: 'Share with your customers', description: 'Hellow'}}
                                    isSelected={selectedStep == 3}  onClick={() => onClcikStep(3)}/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Menu Showcase */}
                <section className='pd-v-50' style={{backgroundColor: '#222222'}}>
                    <div className='container'>
                        <h3 className='display-3' style={{marginBottom: '40px', color: 'var(--light-color)'}}>Built with pie menu</h3>

                        {/* <div className='flex' style={{justifyContent: 'space-around'}}>
                            <MenuProjectCard />
                            <MenuProjectCard />
                        </div> */}
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <MenuProjectCard />
                            </div>
                            <div className="col-12 col-lg-4 d-none d-lg-block">
                                <MenuProjectCard />
                            </div>
                            <div className="col-12 col-lg-4 d-none d-lg-block">
                                <MenuProjectCard />
                            </div>
                        </div>
                        <div className='flex-center pd-20'  style={{marginTop: '20px'}}>
                            <PrimaryButtonLight title={'Try Now'}/>
                        </div>
                    </div>
                </section>

                {/* Client Reviews */}
                <section className='pd-v-50'>
                    <div className="container">

                        <h3 className='display-3 mb-lg-4'>Clients' Feedback</h3>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <FeedbackCard />
                                <FeedbackCard pos={'left'}/>
                                <FeedbackCard/>
                            </div>

                            <div className="col-12 col-lg-6 d-none d-lg-block">
                                <FeedbackCard/>
                                <FeedbackCard pos={'right'}/>
                                <FeedbackCard/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Whats Next */}
                <section className='pd-v-50' style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className="container">
                        <div className="row" style={{display: 'flex', alignItems: 'center'}}>

                            <div className="col-12 col-lg-5">
                                <h3 className='display-3 text-lg-left text-center clr-light mb-lg-0 mb-sm-4' >What's Next</h3>
                                
                                <div className='d-lg-none d-block' style={{margin: '20px 0'}}></div>
                                <p className='text-center clr-light' style={{padding: '10px 0', fontSize: '1.2em'}}>{'You will get a link to your new online restaurant which you can share on your social media and customers'}</p>

                                <div className='p-sm-0' style={{display: 'flex', gap: '20px'}}>
                                    <TextInput type={'email'} placeholder={'Email'}/>
                                    <div className=' d-none d-lg-block'>
                                        <PrimaryButton title={'Notify Me'} style={{height: '100%'}}/>
                                    </div>
                                </div>
                                <div className='d-block d-lg-none p-2' >
                                    <div className='flex' style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                                        <PrimaryButton title={'Notify Me'}/>
                                    </div>
                                </div>
                                <div className='d-lg-none d-block' style={{margin: '20px 0'}}></div>

                                <div className="col-12 col-lg-5  d-block d-lg-none" style={{marginBottom: '30px'}}>
                                    <div className="row">
                                        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                            <div className="col-4 col-lg-3">
                                                <FoodOrderItem image={Burger}/>
                                            </div>
                                            <div className="col-4" style={{position: 'relative'}}>
                                                <FoodOrderItem image={Burger}/>
                                                <img src={Cursor} alt="" style={{position: 'absolute', width: '40px', height: '40px', bottom: '-5%', left: '75%'}}/>
                                            </div>

                                            <div className="col-4 col-lg-3">
                                                <FoodOrderItem image={Burger}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="col-lg-2 d-none d-lg-block">

                            </div>
                            <div className="col-12 col-lg-5 col-md-6 d-none d-lg-block">
                                <div className="row" >
                                    <div style={{display: 'flex', gap: '20px', justifyContent: 'flex-end', alignItems: 'center'}}>
                                        <div className="col-4 col-lg-3">
                                            <FoodOrderItem image={Burger}/>
                                        </div>
                                        <div className="col-4" style={{position: 'relative'}}>
                                            <FoodOrderItem image={Burger}/>
                                            <img src={Cursor} alt="" style={{position: 'absolute', width: '40px', height: '40px', bottom: '-5%', left: '75%'}}/>
                                        </div>

                                        <div className="col-4 col-lg-3">
                                            <FoodOrderItem image={Burger}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom details */}
                <section className='pd-v-50' >
                    <div className="container">
                        <div style={{display: 'flex', gap: '20px',flexDirection: 'column', alignItems: 'center'}}>
                            <h3 className='display-3' style={{marginBottom: 0}}>Easy Menu</h3>
                            <p className='text-center' style={{padding: '10px 0', fontSize: '1.2em', maxWidth: '500px'}}>{'You will get a link to your new online restaurant which you can share on your social media and customers'}</p>
                            <PrimaryButton title={"Register Now"}/>
                        </div>
                    </div>
                </section>

                <section className='' style={{backgroundColor: 'var(--dark-color)', padding: '20px 0'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h3 className='' style={{fontSize: '3rem', marginBottom: 0, color: 'var(--light-color)'}}>Easy Menu</h3>
                            </div>
                            <div className="col-12 col-lg-6">
                                <p className='' style={{padding: '10px 0', fontSize: '1.2em', color: 'var(--light-color)'}}>{'Powered By'} <a href="https://piesites.com">Pie Sites</a></p>
                                <p className='' style={{padding: '10px 0', color: 'var(--light-color)'}}><a href="https://piesites.com">Privary Policy</a><a href="https://piesites.com">Customer Support</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;

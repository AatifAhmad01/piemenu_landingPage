import React from 'react';
import Circle from '../background/circle';
import FoodCard from '../FoodCard/FoodCard';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Burger from '../../assets/images/burger.webp';
import WebView from '../../assets/images/web-view.png';
import MobileView from '../../assets/images/mobile-view.png';

const Hero = () => {
    return (
            <section className='h-screen w-full overflow-hidden relative'>
                <div className='absolute w-full bg-gray-800 border-b-2 border-gray-700'>
                    <Circle size="200px" style={{backgroundColor: 'var(--primary-color)', position: 'absolute', top: '-90px'}}/>
                    <div className='hidden lg:block'>
                        <Circle size="1100px" cla style={{background: 'var(--primary-color)', position: 'absolute', top: '-300px', right: '-200px'}}/>
                    </div>
                </div>

                <div className="container px-4 max-w-7xl h-full max-h-[1200px] flex flex-col justify-center items-center m-auto">
                    <div className="flex justify-between items-center pd-v-100 pb-0">
                        <div className='w-full md:w-8/12 lg:w-6/12 p-4 flex flex-col gap-4' style={{alignItems: 'flex-start', justifyContent: 'center'}}>
                            <div className="flex flex-wrap" >
                                <div className="" style={{}}>
                                    <h1 className='text-6xl font-bold text-gray-800'>Publish Your Restaurant Menu Online</h1>
                                    <p className='m-0 p-0 w-fuil text-gray-600' style={{maxWidth: '400px'}}>
                                        Instantly create and share your restaurant’s menu online. Make it easy for customers to browse your dishes from any device.
                                    </p>
                                </div>
                            </div>
                            <div style={{width: '100%'}}>
                                <h3>List Your Menu</h3>
                                <div className='overflow-auto w-full scrollbar-hide' style={{overflow: 'auto', width: '100%'}}>
                                    <div style={{display: 'flex', gap: '20px'}}>
                                        <FoodCard image={Burger} />
                                        <FoodCard image={Burger}/>
                                        <FoodCard image={Burger}/>
                                    </div>
                                    <div className='hidden md:block'>
                                        <button className='cursor-pointer bg-orange-400 hover:bg-orange-500 text-white px-8 py-2 rounded-lg text-lg font-bold'>Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className='block md:hidden' style={{}}>
                            <PrimaryButton title={'Get Now'} style={{width: '100%', height: '65px', fontSize: '1.4em'}}/>
                        </div> */}

                        {/* <div className="w-full lg:w-1/12 hidden lg:block"></div> */}

                        <div className="w-full md:w-4/12 lg:w-5/12 flex justify-center items-center bg-gray-100">
                            <div className="flex justify-end items-center w-full relative">

                                <div className="hidden lg:block w-full">
                                    <img src={WebView} alt="menu-web-view" className="w-full mt-[30px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Hero;
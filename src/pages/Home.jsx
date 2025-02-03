import React from 'react';
import Circle from '../components/background/circle';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';
import FoodCard from '../components/FoodCard/FoodCard';
import Burger from '../assets/images/burger.webp';
import WebView from '../assets/images/web-view.png';
import MobileView from '../assets/images/mobile-view.png';


const Home = () => {
    return (
        <>
            <main>
                {/* Hero Section */}

                <saction>
                    <div className='' style={{position: 'absolute', height: '100vh', width: '100vw', overflow: 'hidden', }}>
                        <Circle size="200px" style={{backgroundColor: 'var(--primary-color)', position: 'absolute', top: '-130px'}}/>
                        <Circle size="1000px" style={{background: 'var(--primary-color)', position: 'absolute', bottom: '-300px', right: '-200px'}}/>
                    </div>

                    <div className="container-xxl">

                        <div className="row">
                            <div className='col-12 col-lg-6 flex-column' style={{alignItems: 'flex-start', justifyContent: 'space-around'}}>
                                <div className="row">
                                    <div className="" style={{}}>
                                        <h1 style={{fontSize: '4rem', fontFamily: 'Lovelo'}}>TURN YOUR STORE</h1>
                                        <h1 style={{fontSize: '4rem', fontFamily: 'Lovelo'}}>ONLINE</h1>
                                    </div>
                                </div>

                                <div>
                                    <h3>List Your Menu</h3>
                                    <div style={{display: 'flex', gap: '20px'}}>
                                        <FoodCard image={Burger}/>
                                        <FoodCard image={Burger}/>
                                        <FoodCard image={Burger}/>
                                    </div>
                                    <PrimaryButton title={'Get Now'}/>
                                </div>
                            </div>


                            <div className='col-12 col-lg-6' position='relative'>
                                <img src={MobileView} alt="mobile-web-view" style={{width: '200px', position: 'absolute', bottom: '30px', transform: 'translateX(-50px)'}}/>
                                <img src={WebView} alt="menu-web-view" style={{width: '100%', marginTop: '30px'}}/>
                            </div>

                        </div>
                    </div>
                </saction>

            </main>
        </>
    );
};

export default Home;

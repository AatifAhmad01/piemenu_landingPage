import React from 'react';
import './style.css';
import Line from '../Line/Line';
import Burger from '../../assets/images/burger.webp';


const MenuProjectCard = () => {
    return (
        <>
            <div className='menu-project-card bg-light'>
                <h2 style={{fontFamily: 'lovelo', fontSize: '3em', marginBottom: 0}}>Cucina</h2>
                <span className='gray' style={{fontSize: '1.4em'}}>Califronia - USA</span>
                <Line />
                <div className='menu-project-card-items-cont p-10'>
                    <img className='menu-project-card-item w-100' src={Burger} alt="" />
                    <div style={{display: 'flex', gap: '10px', width: '100%'}}>
                        <div style={{flex: '1', backgroundColor: 'red', height: '130px', overflow: 'hidden', borderRadius: '10px'}}>
                            <img className='' src={Burger} alt="" style={{width: '100%'}}/>
                        </div>
                        <div style={{flex: '1', backgroundColor: 'red', height: '130px', overflow: 'hidden', borderRadius: '10px'}}>
                            <img className='' src={Burger} alt="" style={{width: '100%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuProjectCard;

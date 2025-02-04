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
                    <img className='menu-project-card-item' src={Burger} alt="" />
                    <img className='menu-project-card-item' src={Burger} alt="" />
                </div>
            </div>
        </>
    );
};

export default MenuProjectCard;

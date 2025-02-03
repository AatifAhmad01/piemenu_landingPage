import React from 'react';
import './style.css';
import LkeImage from '../../assets/icons/like.png'

const FoodCard = ({image}) => {
    return (
        <>
            <div className='food-card bg-white' style={{padding: '10px', borderRadius: '10px'}}>
                <div className='food-card-image-container'>
                    <img src={image} alt="food" className='food-card-image'/>
                </div>
                <div className='flex-row' style={{margin: '10px 0'}}>
                    <h6 className='m-0' style={{fontFamily: "DM Sans"}}>$18.00</h6>
                    <div className='flex-center'>
                        <img src={LkeImage} alt="Like" style={{width: '20px', height: '20px'}}/>
                        <p style={{fontSize: '0.8rem'}}>2400</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;

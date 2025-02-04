import React from 'react';
import './style.css';
import Burger from '../../assets/images/burger.webp';

const FeedbackCard = () => {
    return (
        <>
            <div className='feedback-card flex'>
                <div>
                    <img className='feedback-card-image' src={Burger}/>
                </div>
                <div className='feedback-card-details'>
                    <h3 className='feedback-card-title'>John Doe</h3>
                    <p className='gray'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nullam nec magna ac libero ultrices tempus. Donec ac ex sit amet nunc lacinia ultrices.”</p>
                </div>
            </div>
        </>
    );
};

export default FeedbackCard;

import React from 'react';
import Burger from '../../assets/images/burger.webp';

const FeedbackCard = ({pos}) => {

    let posStyle = {};
    if (pos === 'left') {
        posStyle = {transform: 'translateX(-15px)'};
    } else if (pos === 'right') {
        posStyle = {transform: 'translateX(15px)'};
    }

    return (
        <>
            <div className='my-8 p-3 rounded-lg transition-all duration-300 ease-in hover:border hover:border-gray-400 flex' style={posStyle}>
                <div>
                    <img className='w-24 h-24 rounded-lg' src={Burger} alt="feedback"/>
                </div>
                <div className='ml-4'>
                    <h3 className='mb-0 text-lg'>John Doe</h3>
                    <p className='text-gray-600'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nullam nec magna ac libero ultrices tempus. Donec ac ex sit amet nunc lacinia ultrices."</p>
                </div>
            </div>
        </>
    );
};

export default FeedbackCard;

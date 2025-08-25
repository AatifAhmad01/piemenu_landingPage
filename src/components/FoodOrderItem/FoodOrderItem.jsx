import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import SecondaryButton from '../SecondaryButton/SecondaryButton';


const FoodOrderItem = ({image}) => {
    return (
        <>
            <div className='food-order-item'>
                <FoodCard image={image} style={{width: '100%'}}/>
                <SecondaryButton title={'Order Now'}/>
            </div>
        </>
    );
};

export default FoodOrderItem;

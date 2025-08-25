import React from 'react';
import LkeImage from '../../assets/icons/like.png'

const FoodCard = ({image, style}) => {
    return (
        <>
            <div className='w-32 mb-5 border border-gray-200 bg-white' style={{...style, padding: '10px', borderRadius: '10px'}}>
                <div className='rounded-lg w-full overflow-hidden'>
                    <img src={image} alt="food" className='w-full'/>
                </div>
                <div className='flex flex-row' style={{margin: '10px 0'}}>
                    <h6 className='m-0' style={{fontFamily: "DM Sans"}}>$18.00</h6>
                    <div className='flex justify-center items-center'>
                        <img src={LkeImage} alt="Like" style={{width: '20px', height: '20px'}}/>
                        <p style={{fontSize: '0.8rem'}}>2400</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;

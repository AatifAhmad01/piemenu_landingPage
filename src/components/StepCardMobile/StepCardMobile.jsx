import React from 'react';
import './style.css';

const StepCardMobile = ({data,  isSelected, onClick}) => {
    return (
        <>
            <div className='step-mobile-cont' style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={onClick}>
                <div>
                    <div className={isSelected ? 'step-mobile-selected step-mobile-active': 'step-mobile-selected'}></div>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>

                    <span className='step-mobile-number'>{data.step}</span>
                    <div>
                        <h3 className='step-mobile-title'>{data.title}</h3>
                        <p className='step-mobile-description'>{data.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepCardMobile;

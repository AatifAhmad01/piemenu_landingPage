import React from 'react';
import './style.css';

const StepCard = ({data,  isSelected, onClick}) => {
    return (
        <>
            <div className='' style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={onClick}>
                <div>
                    <div className={isSelected ? 'step-selected step-active': 'step-selected'}></div>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>

                    <span className='step-number'>{data.step}</span>
                    <div>
                        <h3 className='step-title'>{data.title}</h3>
                        <p className='step-description'>{data.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepCard;

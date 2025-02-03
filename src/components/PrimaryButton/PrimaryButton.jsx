import React from 'react';
import './style.css';

const PrimaryButton = ({title, onClick}) => {
    return (
        <>
            <button  onClick={onClick} className='primary-button'>{title}</button>
        </>
    );
};

export default PrimaryButton;

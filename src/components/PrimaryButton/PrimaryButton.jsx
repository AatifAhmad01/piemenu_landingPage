import React from 'react';
import './style.css';

const PrimaryButton = ({title, onClick, style}) => {
    return (
        <>
            <button  onClick={onClick} className='primary-button' style={style}>{title}</button>
        </>
    );
};

export default PrimaryButton;

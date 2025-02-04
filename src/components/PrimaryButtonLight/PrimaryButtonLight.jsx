import React from 'react';
import './style.css';

const PrimaryButtonLight = ({title, onClick}) => {
    return (
        <>
            <button  onClick={onClick} className='primary-button-light'>{title}</button>
        </>
    );
};

export default PrimaryButtonLight;

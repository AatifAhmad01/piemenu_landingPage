import React from 'react';
import './style.css'

const SecondaryButton = ({title, onClick}) => {
    return (
        <>
            <button  onClick={onClick} className='secondary-button'>{title}</button>
        </>
    );
};

export default SecondaryButton;

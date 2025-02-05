import React from 'react';
import './style.css'

const TextInput = ({type, placeholder, onChange, style}) => {
    return (
        <>
            <input className='text-input' type={type} placeholder={placeholder} style={style} onChange={onChange}/>
        </>
    );
};

export default TextInput;

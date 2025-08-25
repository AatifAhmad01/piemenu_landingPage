import React from 'react';

const Circle = ({style, size, className}) => {
    return (
        <>
            <div className={`circle ${className}`} style={{...style, borderRadius: '50%', height: size, width: size, zIndex: -10}}></div> 
        </>
    );
};

export default Circle;

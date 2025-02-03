import React from 'react';

const Circle = ({style, size}) => {
    return (
        <>
            <div className="circle" style={{...style, borderRadius: '50%', height: size, width: size, zIndex: -10}}></div> 
        </>
    );
};

export default Circle;

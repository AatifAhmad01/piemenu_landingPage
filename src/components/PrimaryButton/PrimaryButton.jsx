import React from 'react';

const PrimaryButton = ({title, onClick, style}) => {
    return (
        <>
            <button  onClick={onClick} className='cursor-pointer bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium' style={style}>{title}</button>
        </>
    );
};

export default PrimaryButton;

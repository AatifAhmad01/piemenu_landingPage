import React, { useState } from 'react';
import LkeImage from '../../assets/icons/like.png'

const FoodCard = ({ 
    image, 
    style, 
    name = "Burger", 
    price = 18.00, 
    likes = 2400,
    description = "Fresh and tasty ingredients with a side of fries",
    onAddToCart,
    onLike
}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        if (onLike) onLike(!isLiked);
    };

    const handleAddToCart = () => {
        if (onAddToCart) onAddToCart({ name, price, image });
    };
    return (
        <div 
            className='relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group'
            style={{
                ...style, 
                minWidth: '120px',
                maxWidth: '140px'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className='relative overflow-hidden'>
                <img 
                    src={image} 
                    alt={name} 
                    className='w-full h-20 object-cover transition-transform duration-300 group-hover:scale-105'
                />
                
                {/* Like Button */}
                <button
                    onClick={handleLike}
                    className={`absolute top-2 right-2 p-1.5 rounded-full transition-all duration-200 ${
                        isLiked 
                            ? 'bg-red-500 text-white shadow-lg' 
                            : 'bg-white/80 text-gray-600 hover:bg-white'
                    }`}
                >
                    <img 
                        src={LkeImage} 
                        alt="Like" 
                        className={`w-3 h-3 transition-all duration-200 ${
                            isLiked ? 'filter brightness-0 invert' : ''
                        }`}
                    />
                </button>

                {/* Quick Add Button */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 transition-all duration-300 ${
                    isHovered ? 'translate-y-0' : 'translate-y-full'
                }`}>
                    <button
                        onClick={handleAddToCart}
                        className='w-full bg-white text-gray-800 py-1 px-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-xs'
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className='p-3'>
                {/* Food Name */}
                <h3 className='font-semibold text-gray-800 mb-1 text-sm' style={{fontFamily: "DM Sans"}}>
                    {name}
                </h3>
                
                {/* Description */}
                <p className='text-gray-600 text-xs mb-2 line-clamp-2'>
                    {description}
                </p>

                {/* Price and Likes */}
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-1'>
                        <span className='text-lg font-bold text-green-600' style={{fontFamily: "DM Sans"}}>
                            ${price.toFixed(2)}
                        </span>
                    </div>
                    
                    <div className='flex items-center gap-1 text-gray-500'>
                        <img 
                            src={LkeImage} 
                            alt="Like" 
                            className='w-3 h-3 opacity-60'
                        />
                        <span className='text-xs font-medium'>
                            {likes.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;

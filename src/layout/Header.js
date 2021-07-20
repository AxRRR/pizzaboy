import React from 'react';

export const Header = ({ headerTitle, headerImg }) => {
    return (
        <div className='pizzas__header-img' data-parallax="scroll">
            <img 
                src={headerImg}
                alt='HeaderImg'
                className='pizzas__header-img2'
            />
            <p className='pizzas__header-text'>{headerTitle}</p>
        </div>
    );
};

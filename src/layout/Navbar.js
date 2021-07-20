import React from 'react';

export const Navbar = () => {
    return (
        <div className='navbar__container'>
            <div className='narbar__img-container'>
                <img 
                    src='https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2019/03/0080_t_pizza-line-logo_2.png'
                    alt='LogoPizzaBoy'
                    className='navbar_logo'/>
            </div>
            <div className='narbar__items-container'>
                <p className='ts-medium'>Home</p>
                <p className='ts-medium'>Pizzas</p>
                <p className='ts-medium'>Combos</p>
                <p className='ts-medium'>Cart</p>
                <p className='ts-medium'>SignIn</p>
            </div>
        </div>
    );
};

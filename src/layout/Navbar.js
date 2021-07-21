import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Navbar = props => {
    const state = useSelector((state) => state.auth);

    useEffect(() => {
    //   localStorage.setItem("userCredentials", JSON.stringify(state));
    }, [state]);
    
    return (
        <div className='navbar__container'>
            <div className='narbar__img-container'>
                <img 
                    src='https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2019/03/0080_t_pizza-line-logo_2.png'
                    alt='LogoPizzaBoy'
                    className='navbar_logo'
                />
            </div>
            <div className='userAccount__container'>
            { state.isUserLoggin === true ? 
                <div>
                    <img 
                        src={state.imageUrl}
                        alt={state.name}
                        className='navbar__GoogleImg'
                    />
                    <p className='ts-GoogleAccount'>{state.name}</p> 
                    <p className='ts-CartWish'>Cart</p>
                </div>
                : 
                <div>
                    <p 
                        className='ts-GoogleAccount'
                        onClick={props.onShowLoginScren}
                    >SignIn</p>
                    <p className='ts-GoogleAccount'>Cart</p>
                </div>
            }
            </div>
            <div className='narbar__items-container'>
                <Link to='/home'>
                    <p className='ts-medium'>Home</p>
                </Link>
                <Link to='/pizzas'>
                    <p className='ts-medium'>Pizzas</p>
                </Link>
                <Link to='/drinks'>
                    <p className='ts-medium'>Drinks</p>
                </Link>
            </div>
        </div>
    );
};

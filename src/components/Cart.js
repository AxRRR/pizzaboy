import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Cart = () => {
    const state = useSelector((state) => state.cart);
    console.log(state)

    useEffect(() => { }, [state]);

    return (
        <div>
            <div className='cart__container-main'>
                <div className='cart__container-items'>
            {state !== null && 
            state.map((c) => (
                <div>
                    <img 
                        src={c.picture} 
                        alt={c.name}
                        className='cart__item-img'
                        />
                        <p>{c.name}</p>
                </div>
                    ))}
                    </div>
            </div>
        </div>
    );
};

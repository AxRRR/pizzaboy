import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRowCart } from '../actions/cart';

export const Cart = () => {
    const dispatch = useDispatch();
    // const [count, setCount] = useState(0);
    // const [countt, setCountt] = useState(0);
    const state = useSelector((state) => state.cart);

    // useEffect(() => {
    //     if(count !== 0){
    //         setCount(count+countt)
    //     }else{
    //         setCount(countt)
    //     }
    //     console.log(count);
    // }, [state]);

    const handleDeleteRowCart = (GetRowToDelete) => {
        dispatch(deleteRowCart(GetRowToDelete));
    };

    // const handleTotalCount = ( listPrice ) => {
    //     if(count !== 0){
    //         setCount(count+listPrice)
    //     }else{
    //         setCount(listPrice)
    //     }
    //     console.log(count);
    //     // console.log(+listPrice);
    // }

    return (
        <div>
            <div className='cart__container-main'>
                <div className='cart__container-items'>
                {state.length >= 1 ? 
                state.map((c) => (
                    <div key={c.id}>
                        <img 
                            src={c.picture} 
                            alt={c.name}
                            className='cart__item-img'
                        />
                        <div className='cart__item-desc'>
                            <p className='ts-big'>{c.name}</p>
                            <p className='ts-big'>{c.price}</p>
                            <p 
                                className='cart__item-close'
                                onClick={() => handleDeleteRowCart(c.id)}
                            >X</p>
                        </div>
                    </div>
                    )) 
                    : <p className='ts-big'>You don't have items to show.</p>}
                </div>
                <button className='butn'>Send order: $499.99</button>
            </div>
        </div>
    );
};

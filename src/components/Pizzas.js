import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemCart } from '../actions/cart';
import { Header } from '../layout/Header';

export const Pizzas = ({ typePizza, listPizzas }) => {
    const dispatch = useDispatch();
    
    const handleAddItemCartList = (GetDataList) => {
        dispatch(addItemCart(GetDataList));
    }

    return (
        <div className='pizzas__maincontainer'>
          <Header 
            headerTitle={typePizza}
            headerImg='https://static.vecteezy.com/system/resources/previews/000/928/085/large_2x/pizza-cut-into-slices-photo.jpg'
          />
            {listPizzas.map((meal) => (
            <div key={meal.id} className='pizzas__container-small'>
                <img 
                    src={meal.picture} 
                    alt={meal.name}
                    className='pizzas__img-container'
                />
                <p className='pizzas__ts-big'>{meal.name}</p>
                <p className='pizzas__ts-small'>{meal.description}</p>
                <button 
                    className='butn butn-large'
                    onClick={() => handleAddItemCartList({
                        id: meal.id,
                        picture: meal.picture,
                        description: meal.description,
                        name: meal.name,
                        price: meal.price,
                })}
                >Buy ${meal.price}</button>
            </div>
            ))}
        </div>
    );
};


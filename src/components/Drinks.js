import React from 'react';
import { Header } from '../layout/Header';

export const Drinks = ({ typeDrinks, listDrinks }) => {
    return (
        <div className='pizzas__maincontainer'>
          <Header 
            headerTitle={typeDrinks}
            headerImg='https://www.drinks-insight-network.com/wp-content/uploads/sites/23/2019/01/rawpixel-744365-unsplash1.jpg'
          />
            {listDrinks.map((meal) => (
            <div className='pizzas__container-small'>
                <img 
                    src={meal.picture} 
                    alt={meal.name}
                    className='pizzas__img-container'
                />
                <p className='pizzas__ts-big'>{meal.name}</p>
                <p className='pizzas__ts-small'>{meal.description}</p>
                <button className='butn butn-large'>Buy ${meal.price}</button>
            </div>
            ))}
        </div>
    );
};

import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Cart } from '../components/Cart';
import { Drinks } from '../components/Drinks';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { Pizzas } from '../components/Pizzas';
import { Container } from '../helpers/Container';
import { Navbar } from '../layout/Navbar';
import { Drinks_Avaible } from '../resources/DrinksAvaible';
import { PIZZAS_AVAIBLE } from '../resources/PizzasAvaible';

export const Routes = () => {
    const [showModalLogin, setShowModalLogin] = useState(false);
    const showModalLoginHandler = () => {
        setShowModalLogin(true);
    };
    
    const hideModalLoginHandler = () => {
        setShowModalLogin(false);
    };

    return (
        <div>
            <Cart />
            {showModalLogin && <Login onCloseLoginScreen={hideModalLoginHandler} /> }
            <Switch>
                <Route exact path='/home'>
                    <Navbar onShowLoginScren={showModalLoginHandler} />
                    <Container>
                        <Home />
                    </Container>
                </Route>
                <Route exact path='/pizzas'>
                    <Navbar onShowLoginScren={showModalLoginHandler} />
                    <Container>
                        <Pizzas 
                            typePizza='Pizzas Vegetarian'
                            listPizzas={PIZZAS_AVAIBLE} 
                        />
                        <Pizzas 
                            typePizza='Pizzas Classics' 
                            listPizzas={PIZZAS_AVAIBLE}
                        />
                    </Container>
                </Route>
                <Route exact path='/drinks'>
                    <Navbar onShowLoginScren={showModalLoginHandler} />
                    <Container>
                        <Drinks
                            typeDrinks='Drinks'
                            listDrinks={Drinks_Avaible} 
                        />
                    </Container>
                </Route>
            </Switch>
        </div>
    );
};
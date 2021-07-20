import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Drinks } from '../components/Drinks';
import { Home } from '../components/Home';
import { Pizzas } from '../components/Pizzas';
import { Container } from '../helpers/Container';
import { Navbar } from '../layout/Navbar';
import { Drinks_Avaible } from '../resources/DrinksAvaible';
import { PIZZAS_AVAIBLE } from '../resources/PizzasAvaible';

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/home'>
                    <Navbar />
                    <Container>
                        <Home />
                    </Container>
                </Route>
                <Route exact path='/pizzas'>
                    <Navbar />
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
                    <Navbar />
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
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../components/Home';
import { Pizzas } from '../components/Pizzas';
import { Container } from '../helpers/Container';
import { Navbar } from '../layout/Navbar';

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
                        <Pizzas />
                    </Container>
                </Route>
            </Switch>
        </div>
    );
};
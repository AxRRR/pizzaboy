import React from 'react';
import { Home } from './components/Home';
import { Container } from './helpers/Container';
import { Navbar } from './layout/Navbar';

export const PizzaBoy = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Home />
            </Container>
        </div>
    );
};

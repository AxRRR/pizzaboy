import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PizzaBoy } from './PizzaBoy';
import { store } from './store/store';

export const HomeIndex = () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <PizzaBoy />
                </BrowserRouter>
            </Provider>
        </div>
    );
};

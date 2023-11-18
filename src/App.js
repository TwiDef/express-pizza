import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import MainPage from './components/pages/mainPage/MainPage';
import CartPage from './components/pages/cartPage/CartPage';
import Page404 from './components/pages/Page404/Page404';
import './App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default App;

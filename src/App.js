import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import MainPage from './components/pages/mainPage/MainPage';
import CartPage from './components/pages/cartPage/CartPage';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="*" element={<MainPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    );
}

export default App;

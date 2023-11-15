import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import MainPage from './components/pages/mainPage/MainPage';
import CartPage from './components/pages/cartPage/CartPage';

function App() {
    return (
        <div className="App">
            <Header />
            <MainPage />
            {/* <CartPage /> */}
        </div>
    );
}

export default App;

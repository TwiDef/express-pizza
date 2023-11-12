import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import PizzaList from './components/pizza-list/PizzaList';

function App() {
    return (
        <div className="App">
            <Header />
            <PizzaList />
        </div>
    );
}

export default App;

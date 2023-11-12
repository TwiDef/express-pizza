import React from 'react';
import PizzaList from '../../pizza-list/PizzaList';
import './MainPage.scss';

const MainPage = (props) => {
    return (
        <div className='mainPage'>
            <PizzaList />
        </div>
    );
}

export default MainPage;
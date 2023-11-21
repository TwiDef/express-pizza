import React from 'react';

import PizzaList from '../../pizza-list/PizzaList';
import './MainPage.scss';

const MainPage = ({ searchValue }) => {
    return (
        <div className='mainPage'>
            <PizzaList searchValue={searchValue} />
        </div>
    );
}

export default MainPage;
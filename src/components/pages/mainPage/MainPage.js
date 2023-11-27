import React from 'react';

import Pagination from '../../pagination/Pagination';
import PizzaList from '../../pizza-list/PizzaList';

import './MainPage.scss';


const MainPage = () => {

    return (
        <div className='mainPage'>
            <PizzaList />
            <Pagination />
        </div>
    );
}

export default MainPage;
import React from 'react';
import Pagination from '../../pagination/Pagination';

import PizzaList from '../../pizza-list/PizzaList';
import './MainPage.scss';


const MainPage = ({ searchValue }) => {
    return (
        <div className='mainPage'>
            <PizzaList searchValue={searchValue} />
            <Pagination />
        </div>
    );
}

export default MainPage;
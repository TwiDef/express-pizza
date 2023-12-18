import React from 'react';
import { useSelector } from 'react-redux';

import Pagination from '../../pagination/Pagination';
import PizzaList from '../../pizza-list/PizzaList';

import './MainPage.scss';


const MainPage = () => {

    const { status } = useSelector((state) => state.allPizzas)

    return (
        <div className='mainPage'>
            <PizzaList />
            {status === 'error' ? null : <Pagination />}
        </div>
    );
}

export default MainPage;
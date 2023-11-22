import React, { useState } from 'react';
import Pagination from '../../pagination/Pagination';

import PizzaList from '../../pizza-list/PizzaList';
import './MainPage.scss';


const MainPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
        <div className='mainPage'>
            <PizzaList currentPage={currentPage} />
            <Pagination setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default MainPage;
import React from 'react';
import './PizzaList.scss';
import SortItems from '../sort-items/SortItems';
import PizzaCard from '../pizza-card/PizzaCard';

const PizzaList = (props) => {
    return (
        <div className='pizzaList'>
            <SortItems />
            <h2>Все пиццы</h2>
            <PizzaCard />
        </div>
    );
}

export default PizzaList;
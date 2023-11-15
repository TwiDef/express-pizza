import React from 'react';
import './PizzaList.scss';
import Categories from '../categories/Categories';
import PizzaCard from '../pizza-card/PizzaCard';

const PizzaList = (props) => {
    return (
        <div className='pizzaList'>
            <Categories />
            <h2>Все пиццы</h2>
            <div className="pizzaCards">
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>

        </div>
    );
}

export default PizzaList;
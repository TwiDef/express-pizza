import React, { useState, useEffect } from 'react';
import './PizzaList.scss';
import Categories from '../categories/Categories';
import PizzaCard from '../pizza-card/PizzaCard';

const PizzaList = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://6554f4a363cafc694fe74239.mockapi.io/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    return (
        <div className='pizzaList'>
            <Categories />
            <h2>Все пиццы</h2>
            <ul className="pizzaCards">
                {items.map(item => {
                    return <li key={item.id}><PizzaCard  {...item} /></li>
                })}
            </ul>

        </div>
    );
}

export default PizzaList;
import React, { useState, useEffect } from 'react';
import './PizzaList.scss';
import Categories from '../categories/Categories';
import PizzaCard from '../pizza-card/PizzaCard';
import Skeleton from '../skeleton/Skeleton';

const PizzaList = (props) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://6554f4a363cafc694fe74239.mockapi.io/items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className='pizzaList'>
            <Categories />
            <h2>Все пиццы</h2>
            <ul className="pizzaCards">
                {loading ? [...new Array(8)].map((_, i) => <Skeleton key={i} />) :
                    items.map(item => {
                        return <li key={item.id}><PizzaCard  {...item} /></li>
                    })}
            </ul>
        </div>
    );
}

export default PizzaList;
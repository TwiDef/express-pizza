import React, { useState, useEffect } from 'react';

import Categories from '../categories/Categories';
import PizzaCard from '../pizza-card/PizzaCard';
import Skeleton from '../skeleton/Skeleton';
import './PizzaList.scss';

const PizzaList = (props) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [categoryIndex, setCategoryIndex] = useState(0)

    useEffect(() => {
        setLoading(true)
        fetch(`https://6554f4a363cafc694fe74239.mockapi.io/items?category=${categoryIndex ? categoryIndex : ''}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryIndex])

    return (
        <div className='pizzaList'>
            <Categories categoryIndex={categoryIndex} onClickCategory={(i) => setCategoryIndex(i)} />
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
import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../../App';

import Categories from '../categories/Categories';
import PizzaCard from '../pizza-card/PizzaCard';
import Skeleton from '../skeleton/Skeleton';
import './PizzaList.scss';

const PizzaList = ({ currentPage }) => {
    const { searchValue } = useContext(SearchContext)

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [categoryIndex, setCategoryIndex] = useState(0)
    const [sortType, setSortType] = useState({
        name: 'популярности',
        sortType: 'rating'
    })

    const category = categoryIndex > 0 ? `category=${categoryIndex}` : ''
    const sortBy = sortType.sortProperty

    useEffect(() => {
        setLoading(true)
        fetch(`https://6554f4a363cafc694fe74239.mockapi.io/items?${category}&limit=8&page=${currentPage}&sortBy=${sortBy}&order=desc`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
    }, [category, sortBy, currentPage])

    const pizzas = items.filter(obj => {
        return obj.title.toLowerCase().includes(searchValue.toLowerCase()) ? true : false
    }).map(item => {
        return <li key={item.id}><PizzaCard  {...item} /></li>
    })
    const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />)

    return (
        <div className='pizzaList'>
            <Categories
                categoryIndex={categoryIndex}
                onChangeCategory={(i) => setCategoryIndex(i)}
                sortType={sortType}
                onChangeSort={(property) => setSortType(property)} />
            <h2>Все пиццы</h2>
            <ul className="pizzaCards">
                {loading ? skeletons : pizzas
                }
            </ul>
        </div>
    );
}

export default PizzaList;
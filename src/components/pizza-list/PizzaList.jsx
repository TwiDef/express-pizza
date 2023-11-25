import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SearchContext } from '../../App';

import Categories from '../categories/Categories';
import PizzaCard from '../pizza-card/PizzaCard';
import Skeleton from '../skeleton/Skeleton';
import './PizzaList.scss';

const PizzaList = ({ currentPage }) => {
    const categoryId = useSelector(state => state.filter.categoryId)
    const sortType = useSelector(state => state.filter.sortType)

    const { searchValue } = useContext(SearchContext)

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sortType.sortProperty
    const searchBy = searchValue ? `search=${searchValue}` : ''

    console.log(searchValue);

    useEffect(() => {
        setLoading(true)
        axios.get(`https://6554f4a363cafc694fe74239.mockapi.io/items?${category}${searchBy}&limit=8&page=${currentPage}&sortBy=${sortBy}&order=desc`)
            .then(res => {
                setItems(res.data)
                setLoading(false)
            })
    }, [category, sortBy, searchBy, currentPage])

    const pizzas = items.map(item => {
        return <li key={item.id}><PizzaCard  {...item} /></li>
    })
    const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />)

    return (
        <div className='pizzaList'>
            <Categories />
            <h2>Все пиццы</h2>
            <ul className="pizzaCards">
                {loading ? skeletons : pizzas
                }
            </ul>
        </div>
    );
}

export default PizzaList;
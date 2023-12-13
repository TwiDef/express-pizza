import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/slices/sortSlice';
import { fetchPizzas } from '../../redux/slices/pizzaSlice';

import { SearchContext } from '../../App';
import { sortList } from '../categories/Categories';

import Categories from '../categories/Categories';
import PizzaCard from '../pizza-card/PizzaCard';
import Skeleton from '../skeleton/Skeleton';
import './PizzaList.scss';

const PizzaList = () => {
    const { categoryId, sortType, currentPage } = useSelector(state => state.filter)
    const { items, status } = useSelector(state => state.pizza)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const { searchValue } = useContext(SearchContext)

    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sortType.sortProperty
    const searchBy = searchValue ? `search=${searchValue}` : ''

    const getPizzas = async () => {
        dispatch(fetchPizzas({
            category,
            searchBy,
            currentPage,
            sortBy
        }))
    }

    // add params to url
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sortType.sortProperty,
                categoryId,
                currentPage
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true

    }, [categoryId, sortBy, searchBy, currentPage])

    // parsing params from url
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sortType = sortList.find(obj => obj.sortProperty === params.sortProperty)

            dispatch(setFilters({
                ...params,
                sortType
            }))
            isSearch.current = true
        }
    }, [])

    // query all pizzas, if has been first render
    useEffect(() => {
        if (!isSearch.current) {
            getPizzas()
        }
        isSearch.current = false
    }, [categoryId, sortBy, searchBy, currentPage])


    const pizzas = items.map(item => {
        return <li key={item.id}><PizzaCard  {...item} /></li>
    })
    const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />)

    return (
        <div className='pizzaList'>
            <Categories />
            <h2>Все пиццы</h2>
            <ul className="pizzaCards">
                {status === 'loading' ? skeletons : pizzas
                }
            </ul>
        </div>
    );
}

export default PizzaList;
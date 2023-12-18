import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/slices/sortSlice';
import { fetchPizzas } from '../../redux/slices/allPizzasSlice';

/* import { SearchContext } from '../../App'; */
import { sortList } from '../categories/Categories';

import Categories from '../categories/Categories';
import PizzaCard from '../pizza-card/PizzaCard';
import Skeleton from '../skeleton/Skeleton';

import sadEmoji from '../../assets/img/sad-emoji.png'

import './PizzaList.scss';

const PizzaList = () => {
    const { categoryId, sortType, currentPage, searchValue } = useSelector(state => state.filter)
    const { items, status } = useSelector(state => state.allPizzas)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isSearch = useRef(false)
    const isMounted = useRef(false)

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
            {status === 'error' ?
                <div className='pizzaList-error'>
                    <h2>Не удалось загрузить пиццы</h2>
                    <p>попробуйте попытку позднее</p>
                    <img src={sadEmoji} alt="" />
                </div> :
                <ul className="pizzaCards">
                    {status === 'loading' ? skeletons : pizzas}
                </ul>}
        </div>
    );
}

export default PizzaList;
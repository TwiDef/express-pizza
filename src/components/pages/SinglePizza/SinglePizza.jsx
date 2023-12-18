/* import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../spinner/Spinner';

import './SinglePizza.scss';

const SinglePizza = () => {
    const [pizza, setPizza] = useState()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(`https://6554f4a363cafc694fe74239.mockapi.io/items/${id}`)
                setPizza(data)
            } catch (error) {
                alert('Извините но такой пиццы не существует');
                navigate('/')
            }
        }
        fetchPizza()

    }, [])

    if (!pizza) return <div className="spinner" ><Spinner /></div>

    return (
        <div>
            <h3>{pizza.title}</h3>
            <img src={pizza.imageUrl} alt="pizza" />
        </div>
    );
};

export default SinglePizza; */

import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSinglePizza, setStatus } from '../../../redux/slices/singlePizzaSlice';

import Spinner from '../../spinner/Spinner';

import './SinglePizza.scss';


const SinglePizza = () => {
    const { item, status } = useSelector((state) => state.singlePizza)
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getPizza = async () => {
        dispatch(fetchSinglePizza({ id }))
    }

    const doError = () => {
        alert('Извините но такой пиццы не существует, \n возможно что-то пошло не так...');
        navigate('/')
        dispatch(setStatus('loading'))
    }

    useEffect(() => {
        getPizza()
    }, [])

    /* if (!item) return <div className="spinner" ><Spinner /></div> */

    return (
        <>
            {status === 'error' ?
                doError() :
                <div>
                    {status === 'loading' ? <div className="spinner" ><Spinner /></div> :
                        <div>
                            <h3>{item.title}</h3>
                            <img src={item.imageUrl} alt="pizza" />
                        </div>
                    }
                </div>}
        </>
    );
};

export default SinglePizza;
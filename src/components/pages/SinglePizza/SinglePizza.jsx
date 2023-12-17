import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../spinner/Spinner';

import './SinglePizza.scss';

const SinglePizza = () => {
    const [pizza, setPizza] = useState()
    const { id } = useParams()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(`https://6554f4a363cafc694fe74239.mockapi.io/items/${id}`)
                setPizza(data)
            } catch (error) {
                console.log(error);
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

export default SinglePizza;
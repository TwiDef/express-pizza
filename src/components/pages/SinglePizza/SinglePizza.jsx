
import React, { useEffect, useState } from 'react';
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

    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedDoughType, setSelectedDoughType] = useState(0)
    const doughTypes = ['тонкое', 'традиционное']

    const onChandeSelectedSize = (i) => {
        setSelectedSize(i)
    }
    const onChangeSelectedType = (i) => {
        setSelectedDoughType(i)
    }

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
                <>
                    {status === 'loading' ? <div className="spinner" ><Spinner /></div> :
                        <div className='singlePizza'>
                            <img className='singlePizza-img' src={item.imageUrl} alt="pizza" />
                            <div className="singlePizza-info">
                                <h3 className='singlePizza-title'>{item.title}</h3>
                                <p className="singlePizza-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque laborum iste debitis iure consequuntur, sequi nostrum quia nemo ut dolorem atque pariatur eius doloremque exercitationem deserunt nam ex corporis aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis magni.
                                </p>
                                <div className="singlePizza-set">
                                    <div className="singlePizza-set__type">
                                        {item.types.map((type, i) => {
                                            return <span
                                                onClick={() => onChangeSelectedType(i)}
                                                className={`singlePizza-set__type ${selectedDoughType === i ? "singlePizza-set__type--active" : ""}`}
                                                key={i}>{doughTypes[type]}</span>
                                        })}
                                    </div>
                                    <div className="singlePizza-set__size">
                                        {item.sizes.map((size, i) => {
                                            return <span
                                                onClick={() => onChandeSelectedSize(i)}
                                                className={`singlePizza-set__size ${selectedSize === i ? "singlePizza-set__size--active" : ""}`}>{size}cm</span>
                                        })}
                                    </div>
                                </div>
                                <div className="singlePizza-footer">
                                    <span className="singlePizza-price">от {item.price}p.</span>
                                    <div className="singlePizza-btns">
                                        <button
                                            onClick={() => navigate(-1)}
                                            className="singlePizza-btn__backward">Назад</button>
                                        <button className="singlePizza-btn__buy">+ Добавить</button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    }
                </>}
        </>
    );
};

export default SinglePizza;
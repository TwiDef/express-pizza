import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../../redux/slices/cartSlice';

import './PizzaCard.scss';

type PizzaCardProps = {
    id: number;
    imageUrl: string;
    title: string;
    types:number[];
    sizes:number[];
    price:number;
    category:number;
    rating: number;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ id,
    imageUrl,
    title,
    types,
    sizes,
    price,
    category,
    rating }) => {

    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.cart.items.find((item:any) => item.id === id))
    const addedCount = cartItem ? cartItem.count : 0
    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedDoughType, setSelectedDoughType] = useState(0)

    const doughTypes = ['тонкое', 'традиционное']

    const onChandeSelectedSize = (i:number) => {
        setSelectedSize(i)
    }
    const onChangeSelectedType = (i:number) => {
        setSelectedDoughType(i)
    }

    const onClickAdd = () => {
        const item = {
            id,
            title,
            imageUrl,
            price,
            type: doughTypes[selectedDoughType],
            size: sizes[selectedSize]
        }
        dispatch(addItem(item))
    }

    return (
        <div className='card'>
            <Link
                to={`/pizza/${id}`}
                style={{ color: '#282828' }}>
                <img
                    className='card-img'
                    src={imageUrl}
                    alt="card-img" />
                <h4 className="card-title">{title}</h4>
            </Link>

            <div className="card-set">
                <div className="card-set__type">
                    {types.map((type, i) => {
                        return <span
                            onClick={() => onChangeSelectedType(i)}
                            className={`card-set__type ${selectedDoughType === i ? "card-set__type--active" : ""}`}
                            key={i}>{doughTypes[type]}</span>
                    })}
                </div>
                <div className="card-set__size">
                    {sizes.map((size, i) => {
                        return <span
                            onClick={() => onChandeSelectedSize(i)}
                            key={i}
                            className={`card-set__size ${selectedSize === i ? "card-set__size--active" : ""}`}
                        >{size}cm</span>
                    })}

                </div>
            </div>
            <div className="card-footer">
                <div className="card-footer__price">от <span>{price}p</span></div>
                <div className="card-footer__btn">
                    <button onClick={onClickAdd}>+ Добавить
                        {addedCount > 0 && <span>{addedCount}</span>}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PizzaCard;
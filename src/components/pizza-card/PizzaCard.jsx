import React, { useState } from 'react';

import './PizzaCard.scss';

const PizzaCard = ({ id,
    imageUrl,
    title,
    types,
    sizes,
    price,
    category,
    rating }) => {

    const [pizzaCount, setPizzaCount] = useState(0)
    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedDoughType, setSelectedDoughType] = useState(0)

    const doughTypes = ['тонкое', 'традиционное']

    const onChandeSelectedSize = (i) => {
        setSelectedSize(i)
    }
    const onChangeSelectedType = (i) => {
        setSelectedDoughType(i)
    }

    return (
        <div className='card'>
            <img className='card-img' src={imageUrl} alt="card-img" />
            <h4 className="card-title">{title}</h4>
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
                    <button onClick={() => setPizzaCount(pizzaCount + 1)}>+ Добавить <span>{pizzaCount}</span></button>
                </div>
            </div>
        </div>
    );
}

export default PizzaCard;
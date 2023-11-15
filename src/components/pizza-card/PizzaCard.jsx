import React, { useState } from 'react';
import './PizzaCard.scss';
import pizzaItem from './../../assets/img/pizza-item.png'

const PizzaCard = (props) => {
    const [pizzaCount, setPizzaCount] = useState(0)

    return (
        <div className='card'>
            <img className='card-img' src={pizzaItem} alt="card-img" />
            <h4 className="card-title">Чизбургер-пицца</h4>
            <div className="card-set">
                <div className="card-set__type">
                    <span className='card-set__type card-set__type--active'>тонкое</span>
                    <span>традиционное</span>
                </div>
                <div className="card-set__size">
                    <span className="card-set__size card-set__size--active card-set__size-small">26cm</span>
                    <span className="card-set__size card-set__size-medium">30cm</span>
                    <span className="card-set__size-large card-set__size-large">40cm</span>
                </div>
            </div>
            <div className="card-footer">
                <div className="card-footer__price">от <span>395p</span></div>
                <div className="card-footer__btn">
                    <button onClick={() => setPizzaCount(pizzaCount + 1)}>+ Добавить <span>{pizzaCount}</span></button>
                </div>
            </div>
        </div>
    );
}

export default PizzaCard;
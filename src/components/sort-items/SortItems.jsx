import React from 'react';
import './SortItems.scss';
import arrowUp from '../../assets/img/arrow-up.svg'

const SortItems = (props) => {
    const typesOfPizza = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']
    return (
        <div className='sorting'>
            <div className="sorting-btn-block">
                {typesOfPizza.map((type, i) => {
                    return <button className='sorting-btn'>{type}</button>
                })}
            </div>
            <div className="sorting-block">
                <button className='sorting-block__arrow'>
                    <img src={arrowUp} alt="" />
                </button>
                Сортировка по: <a href='#'>популярности</a>
            </div>
        </div>
    );
}

export default SortItems;
import React, { useState } from 'react';
import './Categories.scss';
import arrowUp from '../../assets/img/arrow-up.svg'

const Categories = (props) => {

    const [activeItem, setActiveItem] = useState(0)
    const [openPopup, setOpenPopup] = useState(false)
    const [selected, setSelected] = useState(0)

    const sortList = ['популярности', 'цене', 'алфавиту']
    const categories = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']

    const onChangeSortType = (i) => {
        setSelected(i)
        setOpenPopup(false)
    }

    return (
        <div className='categories'>
            <ul className="categories-btn-block">
                {categories.map((type, i) => {
                    return <li
                        onClick={() => setActiveItem(i)}
                        key={i}
                        className={`categories-btn ${activeItem === i ? 'categories-btn--active' : ''}`}>{type}</li>
                })}
            </ul>
            <div className="categories-block">
                <button className='categories-block__arrow'>
                    <img src={arrowUp} alt="up" />
                </button>
                <div>
                    Сортировка по:
                    <span onClick={() => setOpenPopup(!openPopup)}> {sortList[selected]}</span>
                    {
                        openPopup ?
                            <ul className="categories-popup">
                                {sortList.map((item, i) => {
                                    return <ul>
                                        <li
                                            onClick={() => onChangeSortType(i)}
                                            key={i}
                                            className={`categories-popup__type ${selected === i ? 'categories-popup__type--active' : ''}`}>
                                            {item}
                                        </li>
                                    </ul>
                                })}
                            </ul> :
                            null
                    }
                </div>
            </div>
        </div>
    );
}

export default Categories;

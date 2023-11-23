import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slices/sortSlice';
import './Categories.scss';
import arrowUp from '../../assets/img/arrow-up.svg'

const Categories = ({/*  categoryIndex, onChangeCategory, */ sortType, onChangeSort }) => {
    const categoryId = useSelector(state => state.sort.categoryId)
    const dispatch = useDispatch()

    const [openPopup, setOpenPopup] = useState(false)

    const sortList = [
        { name: 'популярности', sortProperty: 'rating' },
        { name: 'цене', sortProperty: 'price' },
        { name: 'алфавиту', sortProperty: 'title' }
    ]
    const categories = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']

    const onChangeSortType = (property) => {
        onChangeSort(property)
        setOpenPopup(false)
    }

    return (
        <div className='categories'>
            <ul className="categories-btn-block">
                {categories.map((type, i) => {
                    return <li
                        /* onClick={() => onChangeCategory(i)} */
                        onClick={() => dispatch(setCategoryId(i))}
                        key={i}
                        className={`categories-btn ${/* categoryIndex */ categoryId === i ? 'categories-btn--active' : ''}`}>{type}</li>
                })}
            </ul>
            <div className="categories-block">
                <button className='categories-block__arrow'>
                    <img src={arrowUp} alt="up" />
                </button>
                <div>
                    Сортировка по:
                    <span onClick={() => setOpenPopup(!openPopup)}> {sortType.name}</span>
                    {
                        openPopup ?
                            <ul className="categories-popup">
                                {sortList.map((obj, i) => {
                                    return <li
                                        onClick={() => onChangeSortType(obj)}
                                        key={i}
                                        className={`categories-popup__type ${sortType.sortProperty === obj.sortProperty ? 'categories-popup__type--active' : ''}`}>
                                        {obj.name}
                                    </li>
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

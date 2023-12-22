import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setSortType } from '../../redux/slices/sortSlice';

import arrowUp from '../../assets/img/arrow-up.svg';

import './Categories.scss';

type SortItem = {
    name: string;
    sortProperty: string;
}

export const sortList: SortItem[] = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене', sortProperty: 'price' },
    { name: 'алфавиту', sortProperty: 'title' },
]

const Categories: React.FC = () => {
    const {categoryId, sortType} = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const [openPopup, setOpenPopup] = useState(false)
    const categoriesBlockRef = useRef<HTMLDivElement>(null)

    const categories = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']

    const onChangeSortType = (property: SortItem) => {
        dispatch(setSortType(property))
        setOpenPopup(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (!event.composedPath().includes(categoriesBlockRef.current)) {
                setOpenPopup(false)
            }
        }

        document.body.addEventListener('click', handleClickOutside)
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div className='categories'>
            <ul className="categories-btn-block">
                {categories.map((type, i) => {
                    return <li
                        onClick={() => dispatch(setCategoryId(i))}
                        key={i}
                        className={`categories-btn ${categoryId === i ? 'categories-btn--active' : ''}`}>{type}</li>
                })}
            </ul>
            <div className="categories-block" ref={categoriesBlockRef}>
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

import React, { useCallback, useContext, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/sortSlice';
import './Search.scss';

const Search = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState('')
    const searchRef = useRef()

    const onClickClear = () => {
        dispatch(setSearchValue(''))
        setValue('')
        searchRef.current.focus()
    }

    const updateSearchValue = useCallback(
        debounce((string) => {
            dispatch(setSearchValue(string))
        }, 1000),
        []
    )

    const onChangeInput = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    return (
        <div className='search'>
            <svg
                className='search-logo' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title /><g id="Search"><path d="M22,23a1,1,0,0,1-.71-.29l-1.93-1.93a1,1,0,0,1,1.42-1.42l1.93,1.93a1,1,0,0,1,0,1.42A1,1,0,0,1,22,23Z" /><path d="M13,24A11,11,0,1,1,24,13,11,11,0,0,1,13,24ZM13,4a9,9,0,1,0,9,9A9,9,0,0,0,13,4Z" /><path d="M28.21,23.79l-3.5-3.5a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,0,1.42l3.5,3.5a3.14,3.14,0,0,0,4.42,0A3.14,3.14,0,0,0,28.21,23.79Z" /></g>
            </svg>
            <input
                ref={searchRef}
                value={value}
                onChange={(e) => onChangeInput(e)}
                className='search-field'
                placeholder='Поиск...' />
            {value && <svg
                onClick={() => onClickClear()}
                className='search-clear' xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="info" /><g id="icons"><path d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" id="exit" /></g>
            </svg>}
        </div>
    );
};

export default Search;
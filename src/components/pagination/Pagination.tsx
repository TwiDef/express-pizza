import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/sortSlice';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

const Pagination: React.FC = () => {
    const dispatch = useDispatch()
    return (
        <ReactPaginate
            className='pagination'
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={e => dispatch(setCurrentPage(e.selected + 1))}
            pageRangeDisplayed={8}
            pageCount={2}
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
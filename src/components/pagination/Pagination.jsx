import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

const Pagination = ({ setCurrentPage }) => {
    return (
        <ReactPaginate
            className='pagination'
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={e => setCurrentPage(e.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={2}
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
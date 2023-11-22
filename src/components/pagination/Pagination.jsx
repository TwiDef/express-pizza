import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

const Pagination = () => {
    return (
        <ReactPaginate
            className='pagination'
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={e => console.log(e)}
            pageRangeDisplayed={8}
            pageCount={3}
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
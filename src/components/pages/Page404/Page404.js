import React from 'react';

import img404 from './../../../assets/img/404-error.png';
import './Page404.scss';

const Page404 = () => {
    return (
        <div className='page404'>
            <img src={img404} alt="" />
        </div>
    );
};

export default Page404;
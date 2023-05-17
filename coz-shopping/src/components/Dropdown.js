import React, { useState } from 'react';
import {SlPresent,SlStar} from "react-icons/sl"
import { Link } from 'react-router-dom';

function Dropdown() {

    return (
        <div className='dropdown-menu'>
            <div className='dropdown'>0 0 님 어서오세요</div>
            <hr/>
            <Link to = "/product/list"><div className='dropdown'><SlPresent/> 상품리스트 페이지</div></Link>
            <hr/>
            <Link to ="/bookmark"><div className='dropdown'><SlStar/> 북마크 페이지</div></Link>
        </div>
    )
};

export default Dropdown;

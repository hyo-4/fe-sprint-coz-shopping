import React, { useState } from 'react';
import {SlPresent,SlStar} from "react-icons/sl"

function Dropdown() {

    return (
        <div className='dropdown-menu'>
            <div className='dropdown'>0 0 님 어서오세요</div>
            <hr/>
            <div className='dropdown'><SlPresent/> 상품리스트 페이지</div>
            <hr/>
            <div className='dropdown'><SlStar/> 북마크 페이지</div>
        </div>
    )
};

export default Dropdown;

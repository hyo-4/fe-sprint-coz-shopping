import React, { useState, useEffect } from "react";
import { AiOutlineStar,AiTwotoneStar } from "react-icons/ai";
import BookMark from "./BookMark";

function Card({ item , booked ,setBooked}) {

    const bookmarking = () => {

    }


    switch (item.type) {
        case 'Product':
            return (          
             <div className="card">
                <div className="bookmark" onClick={bookmarking} >{<BookMark/> ? <AiTwotoneStar/>:<AiOutlineStar/>}</div>
                <img id = "img_card" src= {item.img_url} width="264" height="210"></img>
                <div>{item.title}</div>
                <div>{item.discount}%</div>
                <div>{item.price}원</div>
             </div>
            );
        case 'Category':
            return (
                <div className="card">
                <div className="bookmark">{<BookMark/>? <AiTwotoneStar/>:<AiOutlineStar/>}</div>
                <img id = "img_card" src= {item.img_url} width="264" height="210" ></img>
                <div># {item.title}</div>
             </div>
            );
        case 'Brand':
            return (
                <div className="card" >
                <div className="bookmark" >{<BookMark/>? <AiTwotoneStar/>:<AiOutlineStar/>}</div>
                <img id = "img_card" src= {item.brand_url} width="264" height="210"></img>
                <div>{item.brand}</div>
                <div>관심 고객수</div>
                <div>{item.follower}</div>
             </div>
            );
        case 'Exhibition':
            return (
                <div className="card">
                <div className="bookmark">{<BookMark/>? <AiTwotoneStar/>:<AiOutlineStar/>}</div>
                <img id = "img_card" src= {item.img_url} width="264" height="210"></img>
                <div>{item.title}</div>
                <div>{item.sub_title}</div>
             </div>
            );
        default:
            return <div>없음</div>;
    }

}

export default Card;
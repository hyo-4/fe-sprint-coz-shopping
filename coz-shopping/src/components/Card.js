import React, { useState, useEffect } from "react";

function Card({ item }) {


    switch (item.type) {
        case 'Product':
            return (
             <div className="card">
                <img id = "img_card" src= {item.img_url} width="264" height="210"></img>
                <div>{item.title}</div>
                <div>{item.discount}%</div>
                <div>{item.price}원</div>
             </div>
            );
        case 'Category':
            return (
                <div className="card">
                <img id = "img_card" src= {item.img_url} width="264" height="210"></img>
                <div># {item.title}</div>
             </div>
            );
        case 'Brand':
            return (
                <div className="card">
                <img id = "img_card" src= {item.brand_url} width="264" height="210"></img>
                <div>{item.brand}</div>
                <div>관심 고객수</div>
                <div>{item.follower}</div>
             </div>
            );
        case 'Exhibition':
            return (
                <div className="card">
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
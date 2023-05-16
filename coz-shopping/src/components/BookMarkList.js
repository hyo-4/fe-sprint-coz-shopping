import React, { useState , useEffect } from "react";
import Card from "./Card";

function BookMarkList({items , booked}){
    const newItems = items.filter((item)=> item.id <20); //북마크 여부 체크해서 필터링!
    booked = true;
    return (
        <div className="bookmark-list">
            {newItems.map((item) => (
                <Card item = {item} booked = {booked}/>
            ))}
        </div>
    );    
}

export default BookMarkList;
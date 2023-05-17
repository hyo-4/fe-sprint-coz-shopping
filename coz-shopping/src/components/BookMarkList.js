import React, { useState , useEffect } from "react";
import Card from "./Card";

function BookMarkList({items , booked , setBooked}){
    const newItems = items.filter((item)=> item.id <40); //북마크 여부 체크해서 필터링! , localhost 이용할것

    return (
        <div className="bookmark-list">
            {newItems.slice(0,4).map((item) => (
                <Card item = {item} booked = {booked} setBooked={setBooked}/>
            ))}
        </div>
    );    
}

export default BookMarkList;
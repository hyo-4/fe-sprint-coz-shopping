import React, { useState , useEffect } from "react";
import Card from "./Card";

function BookMarkList({items , booked , setBooked}){

    const newItemList = items.filter((item)=> booked.includes(item.id));

    return (
        <div className="bookmark-list">
            {newItemList.slice(0,4).map((item) => (
                <Card key={item.id} item = {item} booked = {booked} setBooked={setBooked}/>
            ))}
        </div>
    );    
}

export default BookMarkList;
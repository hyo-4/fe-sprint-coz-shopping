import React, { useState, useEffect } from "react";
import ItemList from "./itemList";

function BookMarkPage({ items, booked, setBooked }) {

    useEffect(()=>{
        setBooked(JSON.parse(localStorage.getItem("booked")));
    },[]) 

    const newBookMarkList = items.filter((item) => booked.includes(item.id));
    return (
        <ItemList items={newBookMarkList} booked={booked} setBooked={setBooked} />
    );
}

export default BookMarkPage;
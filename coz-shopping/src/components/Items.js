import React, { useState , useEffect } from "react";
import Card from "./Card";
import CardContainer from "./CardContainer";
import BookMarkList from "./BookMarkList";


function Items({items, booked,setBooked}){

  useEffect(() => {
    setBooked(JSON.parse(localStorage.getItem("booked")));
  }, []);

      return (
        <div id ="item-list">
            <div id = "item-title">상품 리스트</div>
            <CardContainer items = {items} booked = {booked} setBooked = {setBooked}/>
            <div id = "bookmark-title">북마크 리스트</div>
            <BookMarkList items = {items} booked = {booked} setBooked={setBooked}></BookMarkList>
        </div>
      )
}

export default Items;
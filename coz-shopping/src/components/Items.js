import React, { useState , useEffect } from "react";
import Card from "./Card";
import CardContainer from "./CardContainer";
import BookMarkList from "./BookMarkList";


function Items({items, booked}){

      return (
        <div id ="item-list">
            <div id = "item-title">상품 리스트</div>
            <CardContainer items = {items} booked = {booked}/>
            <div id = "bookmark-title">북마크 리스트</div>
            <BookMarkList items = {items} booked = {booked}></BookMarkList>
        </div>
      )
}

export default Items;
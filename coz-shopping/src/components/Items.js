import React, { useState , useEffect } from "react";
import Card from "./Card";
import CardContainer from "./CardContainer";

function Items(){
    const [items, setItems] = useState([]);

    const getItems = async () => {
        const res = await fetch(
          "http://cozshopping.codestates-seb.link/api/v1/products?count=10"
        ).then((res) => res.json());
    
        const initData = res.map((it) => {
          return {
            title: it.title,
            brand_name : it.brand_name,
            type: it.type,
            sub_title : it.sub_title,
            id: it.id,
            img_url: it.image_url,
            price: it.price,
            discount:it.discountPercentage,
            brand_url : it.brand_image_url,
            follower: it.follower,
            brand : it.brand_name,
            brand_img : it.brand_image_url,
          };
        });
        setItems(initData);
        console.log(items);
      };

      useEffect(() => {
        getItems();
      }, []);
      
      return (
        <div id ="item-list">
            <div id = "item-title">상품 리스트</div>
            <CardContainer items = {items}/>
        </div>
      )
}

export default Items;
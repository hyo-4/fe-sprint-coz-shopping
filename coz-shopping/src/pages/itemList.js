import React, { useState , useEffect } from "react";
import Card from "../components/Card";


function ItemList({items, booked}){

    const [filteredItem, SetfilteredItem] = useState("");
    const [all , SetAll] = useState(true);

    const fProduct = () => {
        SetfilteredItem("Product");
        SetAll(false);
    }

    const fBrand = () => {
        SetfilteredItem("Brand");
        SetAll(false);
    }

    const fExhibition = () => {
        SetfilteredItem("Exhibition");
        SetAll(false);
    }

    const fCategory = () => {
        SetfilteredItem("Category")
        SetAll(false);
    }
    

    return (
   
        <div className="item-list-container">
            <div id = "item-filter-names">
            <div className="item-filter" onClick = {()=>SetAll(true)}>
            <img className="filteredimg" src="../all.png" alt="logo" />
                전체
                </div>
            <div className="item-filter" onClick={fProduct}>
            <img className="filteredimg" src="../img1.png" alt="logo" />
                상품</div>
            <div className="item-filter" onClick={fCategory}>
            <img className="filteredimg" src="../img2.png" alt="logo" />
                카테고리</div>
            <div className="item-filter" onClick={fExhibition}>
            <img className="filteredimg" src="../img3.png" alt="logo" />
                기획전</div>
            <div className="item-filter" onClick={fBrand}>
            <img className="filteredimg" src="../img4.png" alt="logo" />
                브랜드</div>
            </div>

            <div id = "item-filtered">
            {all? items.map((item) => (
                <Card item = {item} booked = {booked}/>
            )):items.filter((i)=> i.type === filteredItem).map((item) => (
                <Card item = {item} booked = {booked}/>
            ))}
            </div>
        </div>
    )
}

export default ItemList;
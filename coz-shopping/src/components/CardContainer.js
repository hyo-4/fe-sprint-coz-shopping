import React, { useState , useEffect } from "react";
import Card from "./Card";

function CardContainer({items}) {
    
    return (
        <div className="card-container">
            {items.slice(0,4).map((item) => (
                <Card item = {item}/>
            ))}
        </div>
    )

}

export default CardContainer;
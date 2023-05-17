import React, { useState , useEffect } from "react";
import Card from "./Card";

function CardContainer({items , booked, setBooked}) {
    
    return (
        <div className="card-container">
            {items.slice(0,4).map((item) => (
                <Card item = {item} booked = {booked} setBooked = {setBooked}/>
            ))}
        </div>
    )

}

export default CardContainer;
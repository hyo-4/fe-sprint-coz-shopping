import React, { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Modal({ item , click ,setClick , booked, setBooked , bookmarking}) {

    const [address, setAddress] = useState("");
    const [title, setTitle] = useState("")

    useEffect(()=>{
        if(item && item.type === "Brand"){
            setAddress(item.brand_url);
            setTitle(item.brand);
        }else{
            setAddress(item.img_url);
            setTitle(item.title);
        }
    },[])
    
    return (
        <div id="modal-container">
            <div id="modal-title">
                {item.type === "Category"? " # ":null}
                {item ? title : null}
                </div>
            <div id = "modal-bookmark" onClick={bookmarking}>{ booked && booked.includes(item.id) ? <AiFillStar className="star"/>:<AiOutlineStar className="star"/>}</div>
            <div id="close-modal" onClick={()=>setClick(!click)}><HiOutlineX/></div>
            <img id="modal-img" src={item ? address : null}>
            </img>

        </div>
    );
}

export default Modal;
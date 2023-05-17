import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Modal from "./Modal";

function Card({ item, booked, setBooked }) {

    const [bookmark, setBookmark] = useState(false);
    const [click, setClick] = useState(false);

    const bookmarking = () => {

        setBookmark(!bookmark);
        let newbookedlist = JSON.parse(localStorage.getItem("booked"));

        if (newbookedlist === null) { newbookedlist = [] };

        if (newbookedlist && newbookedlist.includes(item.id)) { //북마크가 이미 체크되었을 때 삭제
            newbookedlist = newbookedlist.filter((el)=> el !== item.id);
            localStorage.setItem("booked", JSON.stringify(newbookedlist));
            setBooked(newbookedlist);
            setBookmark(!bookmark);
        }
        else{ // 북마크 되지 않은 상품일 경우에는 추가
            newbookedlist.push(item.id);
            newbookedlist = [...new Set(newbookedlist)];
            localStorage.setItem("booked", JSON.stringify(newbookedlist));
            setBooked(newbookedlist);
            setBookmark(!bookmark);
        }
        
        
    }

    useEffect(()=>{
        setBooked(JSON.parse(localStorage.getItem("booked")));
    },[bookmark]) //새로고침용

    
    switch (item.type) {
        case 'Product':
            return (          
             <div className="card">
                <div className="bookmark" onClick={bookmarking} >{ booked && booked.includes(item.id) ? <AiFillStar className="starcolor"/>:<AiOutlineStar/>}</div>
                <div className = "clickArea" onClick={()=>setClick(!click)}>
                <img id = "img_card" src= {item.img_url} width="264" height="210"></img>
                <div>{item.title}</div>
                <div>{item.discount}%</div>
                <div>{item.price}원</div>
                </div>
                <div>{click? <Modal item = {item} click = {click} setClick = {setClick} booked = {booked} setBooked = {setBooked} bookmarking= {bookmarking}/>:null}</div>
             </div>
            );
        case 'Category':
            return (
                <div className="card">
                <div className="bookmark" onClick={bookmarking}>{ booked && booked.includes(item.id) ? <AiFillStar className="starcolor"/>:<AiOutlineStar/>}</div>
                <div className = "clickArea" onClick={()=>setClick(!click)}>
                <img id = "img_card" src= {item.img_url} width="264" height="210" ></img>
                <div># {item.title}</div>
                </div>
                <div>{click? <Modal item = {item} click = {click} setClick = {setClick} booked = {booked} setBooked = {setBooked} bookmarking= {bookmarking} />:null}</div>
             </div>
            );
        case 'Brand':
            return (
                <div className="card" >
                <div className="bookmark" onClick={bookmarking}>{ booked && booked.includes(item.id) ? <AiFillStar className="starcolor"/>:<AiOutlineStar/>}</div>
                <div className = "clickArea" onClick={()=>setClick(!click)}>
                <img id = "img_card" src= {item.brand_url} width="264" height="210"></img>
                <div>{item.brand}</div>
                <div>관심 고객수</div>
                <div>{item.follower}</div>
                </div>
                <div>{click? <Modal item = {item} click = {click} setClick = {setClick} booked = {booked} setBooked = {setBooked} bookmarking= {bookmarking} />:null}</div>
             </div>
            );
        case 'Exhibition':
            return (
                <div className="card">
                <div className="bookmark" onClick={bookmarking} >{ booked && booked.includes(item.id) ? <AiFillStar className="starcolor"/>:<AiOutlineStar/>}</div>
                <div className = "clickArea" onClick={()=>setClick(!click)}>
                <img id = "img_card" src= {item.img_url} width="264" height="210"></img>
                <div>{item.title}</div>
                <div>{item.sub_title}</div>
                </div>
                <div>{click? <Modal item = {item} click = {click} setClick = {setClick} booked = {booked} setBooked = {setBooked} bookmarking= {bookmarking} />:null}</div>
             </div>
            );
        default:
            return <div>없음</div>;
    }

}

export default Card;
import React, { useState } from "react";

function BookMark(id) {
    useEffect(() => {
        const book = localStorage.getItem("booked");
        if(book === null){
            book = [];
        }else{
            book = JSON.parse(book);
        }
        book.push(id);
        book = new Set(book);
        book = [...book];
        localStorage.setItem("booked",JSON.stringify(book));
        console.log(book);
    },[]
    )
}

export default BookMark;
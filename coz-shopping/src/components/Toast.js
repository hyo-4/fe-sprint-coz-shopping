import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Toast({toast, setToast , deltoast , setDelToast}) {

    let [alert, alertSet] = useState(true);
    useEffect(() => {
        let timer = setTimeout(() => { 
            alertSet(false);
            setToast(false);
            setDelToast(false);
         }, 1500);
    });


    return (
        <div>
       { alert === true && toast ? (
            <div className="toast-modal">
                <AiFillStar/>상품이 북마크에 추가되었습니다.
                </div>
            
            ):null}
       { alert === true && deltoast ? (
             <div className="toast-modal">
                <AiOutlineStar/>상품이 북마크에서 삭제되었습니다.
                </div>
       ):null}
       </div>
    );
}

export default Toast;
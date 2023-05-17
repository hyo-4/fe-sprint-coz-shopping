import React, { useState , useEffect } from "react";
import './App.css';
import Header from './components/Header';
import ItemList from './pages/itemList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Items from './components/Items';
import BookMarkList from './components/BookMarkList';
import BookMarkPage from "./pages/BookMarkPage";


function App() {

  const [items, setItems] = useState([]);
  const [booked , setBooked] = useState([]);
  
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
    };

    useEffect(() => {
      getItems();
    }, []);

    
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path = '/' element = {<Items items = {items} booked = {booked} setBooked = {setBooked}/>}></Route>
      <Route path = '/product/list' element ={<ItemList items={items} booked={booked} setBooked = {setBooked} />}></Route>
      <Route path = '/bookmark' element = {<BookMarkPage items = {items} booked = {booked} setBooked = {setBooked}/>}></Route>
    </Routes>
    <div id="footer">
            <div>개인정보 처리방침 | 이용 약관</div>
            <div>All rights reserved @ Codestates</div>
    </div>
    </Router>
  );
}

export default App;

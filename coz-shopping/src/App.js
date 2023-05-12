import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ItemList from './pages/itemList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookMark from './pages/bookMark';


function App() {
  return (
    <Router>
    <Header/>
    <div id="footer">
            <div>개인정보 처리방침 | 이용 약관</div>
            <div>All rights reserved @ Codestates</div>
    </div>
    </Router>
  );
}

export default App;
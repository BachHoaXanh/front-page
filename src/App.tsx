import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path='/' component={Home}/>
                <Route exact path='/:cate' component={Home}/>
                <Route exact path="/:cate/:id" component={ProductDetail}/>
                <Route exact path="/checkout" component={Checkout}/>
            </div>
        </Router>
    );
}

export default App;

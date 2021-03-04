import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import {CartProvider} from "./contexts/Cart";

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/:cate' component={Home}/>
                    <Route exact path="/:cate/:id" component={ProductDetail}/>
                    <Route exact path="/cart/checkout" component={Checkout}/>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;

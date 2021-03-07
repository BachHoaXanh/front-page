import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import {CartProvider} from "./contexts/Cart";
import AboutUS from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import News from "./pages/News";
import Products from "./pages/Products";
import SaleOff from "./pages/SaleOff";

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/products' component={Products}/>
                    <Route exact path="/checkout" component={Checkout}/>
                    <Route exact path="/about" component={AboutUS}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/sale" component={SaleOff}/>
                    <Route exact path="/contact" component={ContactUs}/>
                    <Route exact path='/categories/:cate' component={Products}/>
                    <Route exact path="/products/:id" component={ProductDetail}/>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;

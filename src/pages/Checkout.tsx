import React from "react";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import CheckoutBody from "../components/Checkout/CheckoutBody";
import Breadcrumb from "../components/Layouts/Breadcrumb";
import {withRouter} from "react-router";

const Checkout = () => {
    return (
        <div className="Checkout">
            <Header/>
            <Breadcrumb/>
            <div className="box_pages" style={{ backgroundColor: '#ffffff'}}>
                <CheckoutBody/>
            </div>
            <Footer/>
        </div>
    );
}

export default withRouter(Checkout);

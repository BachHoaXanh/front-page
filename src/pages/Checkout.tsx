import React from "react";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import CheckoutBody from "../components/Checkout/CheckoutBody";
import Title from "../components/Layouts/Title";
import {withRouter} from "react-router";

const Checkout = () => {
    return (
        <div className="Checkout">
            <Header/>
            <Title/>
            <CheckoutBody/>
            <Footer/>
        </div>
    );
}

export default withRouter(Checkout);

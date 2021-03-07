import Header from "../components/Layouts/Header";
import Breadcrumb from "../components/Layouts/Breadcrumb";
import Footer from "../components/Layouts/Footer";
import React from "react";

const SaleOff = () => {
    return (
        <div className="ContactUs">
            <Header activeSale={true}/>
            <Breadcrumb activeSale={true}/>

            <Footer/>
        </div>
    );
}

export default SaleOff;

import Header from "../components/Layouts/Header";
import Breadcrumb from "../components/Layouts/Breadcrumb";
import Footer from "../components/Layouts/Footer";
import React from "react";

const ContactUs = () => {
    return (
        <div className="ContactUs">
            <Header activeContact={true}/>
            <Breadcrumb activeContact={true}/>

            <Footer/>
        </div>
    );
}

export default ContactUs;

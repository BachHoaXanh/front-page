import React from "react";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Breadcrumb from "../components/Layouts/Breadcrumb";

const AboutUS = () => {
    return (
        <div className="AboutUs">
            <Header activeAbout={true}/>
            <Breadcrumb activeAbout={true}/>

            <Footer/>
        </div>
    );
}

export default AboutUS;

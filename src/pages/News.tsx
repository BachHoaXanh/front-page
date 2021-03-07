import React from "react";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Breadcrumb from "../components/Layouts/Breadcrumb";

const News = () => {
    return (
        <div className="AboutUs">
            <Header activeNews={true}/>
            <Breadcrumb activeNews={true}/>

            <Footer/>
        </div>
    );
}

export default News;

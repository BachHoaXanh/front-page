import React from "react";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Title from "../components/Layouts/Title";
import Nav from "../components/Layouts/Nav";
import Products from "./Products";

const Home = () => {
    return (
        <div className="Home">
            <Header/>
            <Title/>
            <div className="box_pages" style={{paddingTop: "30px", paddingBottom: "20px", background: "#ffffff"}}>
                <section>
                    <Nav/>
                    <Products/>
                </section>
            </div>

            <Footer/>
        </div>
    );
}

export default Home;

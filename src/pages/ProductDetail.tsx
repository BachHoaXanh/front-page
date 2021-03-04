import React, {useEffect, useState} from "react";
import Header from "../components/Layouts/Header";
import Title from "../components/Layouts/Title";
import Footer from "../components/Layouts/Footer";
import ProductBody from "../components/Products/ProductBody";
import axios from "axios";
import {API_PRODUCTS} from "../api.common";
import {withRouter} from "react-router";

const ProductDetail = (props: any) => {
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`${API_PRODUCTS}/${props.match.params.id}`).then((res) => setProduct(res.data));
    }, [props.match.params.id])

    return (
        <div className="product-detail">
            <Header/>
            <Title
                category={props.match.params.cate}
                product={product}
            />
            <div className="box_pages" style={{paddingBottom: "20px", background: "#ffffff"}}>
                <ProductBody
                    product={product}
                />
            </div>
            <Footer/>
        </div>
    );
}

export default withRouter(ProductDetail);

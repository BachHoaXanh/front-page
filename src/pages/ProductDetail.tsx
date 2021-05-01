import React, {useEffect, useState} from "react";
import Header from "../components/Layouts/Header";
import Breadcrumb from "../components/Layouts/Breadcrumb";
import Footer from "../components/Layouts/Footer";
import ProductBody from "../components/Products/ProductBody";
import axios from "axios";
import {API_PRODUCTS} from "../api.common";
import {withRouter} from "react-router";

const ProductDetail = (props: any) => {
    const [product, setProduct] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${API_PRODUCTS}`).then((res) => {
            setProduct(res.data.find((item: any) => item.id === +props.match.params.id));
            res.data.length = 8;
            setProducts(res.data);
        })
    }, [props.match.params.id])
    console.log('product', product)
    console.log('products', products)
    return (
        <div className="product-detail">
            <Header activeProducts={true}/>
            <Breadcrumb
                activeProduct={true}
                category={props.match.params.cate}
                product={product}
            />
            <div className="box_pages" style={{paddingBottom: "20px", background: "#ffffff"}}>
                <ProductBody
                    product={product}
                    products={products}
                />
            </div>
            <Footer/>
        </div>
    );
}

export default withRouter(ProductDetail);

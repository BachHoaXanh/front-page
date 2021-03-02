import React, {useEffect, useState} from "react";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Title from "../components/Layouts/Title";
import Products from "../components/Products/Products";
import {API_CATEGORIES, API_PRODUCTS} from "../api.common";
import axios from "axios";

const Home = (props: any) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [sortedCategory, setSortedCategory] = useState([]);
    let cate = props.location.pathname.split('/')[1]

    useEffect(() => {
        axios.get(`${API_CATEGORIES}`).then((res) => {
           setCategories(res.data);
        });

        axios.get(`${API_PRODUCTS}`).then((res) => {
            const virtualCate = [...res.data];
            console.log('virtualCate', virtualCate)
            const sortedCate: any = Object.values(virtualCate.reduce((a, {categoryId}) => {
                a[categoryId] = a[categoryId] || {categoryId, count: 0};
                a[categoryId].count++;
                return a;
            }, Object.create(null)));

            // Sort and splice category by posts count
            sortedCate.sort((a: any, b: any) => b.count - a.count);
            setSortedCategory(sortedCate);

            console.log('sorted', sortedCate)

            const virtualData: any = [];

            res.data.forEach((item: any) => virtualData.push(item));

            setProducts(virtualData);
            console.log('products', products)
        });
    }, [cate]);

    return (
        <div className="Home">
            <Header/>
            <Title/>
            <div className="box_pages" style={{paddingTop: "30px", paddingBottom: "20px", background: "#ffffff"}}>
                <Products
                    products={products}
                    sortedCategory={sortedCategory}
                />
            </div>
            <Footer/>
        </div>
    );
}

export default Home;

import axios from "axios";
import { withRouter } from "react-router";
import React, { useEffect, useState } from "react";
import Body from "../components/Layouts/Body";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Title from "../components/Layouts/Title";
import { API_PRODUCTS } from "../api.common";

const Home = (props: any) => {
    const [products, setProducts] = useState([]);
    const [sortedCategory, setSortedCategory] = useState([]);
    let cate: string = props.location.pathname.split('/')[1]

    useEffect(() => {
        axios.get(`${API_PRODUCTS}`).then((res) => {
            const virtualCate: any[] = [...res.data];
            // Get all category
            const sortedCate: any = Object.values(virtualCate.reduce((a, {categoryId}) => {
                a[categoryId] = a[categoryId] || {categoryId, count: 0};
                a[categoryId].count++;
                return a;
            }, Object.create(null)));

            // Sort and splice category by posts count
            sortedCate.sort((a: any, b: any) => b.count - a.count);
            setSortedCategory(sortedCate);

            if (cate?.trim().length > 0) {
                const virtualData: any = [];
                let categoryId: number;

                sortedCate.forEach(async (item: any) => {
                    if (item?.name === cate) categoryId = item?.categoryId;
                });

                virtualCate.forEach(async (item: any) => {
                    if (item?.categoryId === categoryId) virtualData.push(item)
                });
                setProducts(virtualData)
            } else {
                const virtualData: any = [];

                virtualCate.forEach((item: any) => virtualData.push(item));
                setProducts(virtualData);
            }
        });
    }, [cate]);

    return (
        <div className="Home">
            <Header categories={sortedCategory}/>
            <Title/>
            <div className="box_pages" style={{paddingTop: "30px", paddingBottom: "20px", background: "#ffffff"}}>
                <Body products={products} sortedCategory={sortedCategory}/>
            </div>
            <Footer/>
        </div>
    );
}

export default withRouter(Home);

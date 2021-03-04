import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import axios from "axios";
import {API_CATEGORIES} from "../../api.common";
import Product from "../Products/Product";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {CategoryInterface} from "../../common";

const Body = (props: any) => {
    const history = useHistory();
    const {sortedCategory} = props;
    const [limit, setLimit] = useState(8);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setLimit(limit + 5);
        }, 1500);
    }

    const chooseCateLink = (categoryName: string) => history.push(`/${categoryName}`);

    useEffect(() => {
        setProducts(props.products);
        // List Categories
        axios.get(`${API_CATEGORIES}`).then((res) => setCategories(res.data))
    }, [props.products]);

    const limitProduct = products.slice(0, limit);

    sortedCategory.forEach(async (item: any) => {
        const category: any = categories.find((each: any) => each.id === parseInt(item?.categoryId));
        item.name = category?.name;
    });

    return (
        <section>
            <div className="f_left" id="fix_left">
                <div className="fl_title">
                    <label>Danh mục sản phẩm</label>
                    <figure/>
                </div>
                <div className="box_cate">
                    <ul>
                        {sortedCategory.map((item: CategoryInterface, index: number) =>
                            <li key={index} id={item.categoryId?.toString()} style={{cursor: 'pointer'}}>
                                <h3>
                                    <div className="cateLink" onClick={() => chooseCateLink(item.name)}>
                                        <FontAwesomeIcon icon={faAngleRight} className="breadcrumb-arrow"
                                                         style={{marginRight: '0.5rem', marginTop: '1px'}}/>
                                        {item.name}
                                    </div>
                                </h3>
                                <code>{item.count}</code>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="f_right">
                <div className="fl_title"><h1>Sản phẩm</h1>
                    <figure/>
                </div>
                <div className="box_list">
                    {
                        limitProduct.map((item: any, index: number) => {
                            return (
                                <Product
                                    key={index}
                                    product={item}
                                    category={categories.find((each: any) => each.id === parseInt(item.categoryId))}
                                />
                            );
                        })
                    }
                </div>
                {(products.length > 8 && products.length >= limit) &&
                <div className="tab-loadmore flex-center">
                    <div className="tab-loadmore-btn btn" onClick={loadMore}>
                        Load More
                    </div>
                    {
                        loading &&
                        <div className="tab-loadmore-btn tab-loadmore-loading btn-nothover">
                            <div>Loading...</div>
                        </div>
                    }
                </div>
                }
            </div>
        </section>
    );
}

export default Body;

import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

const showPrice = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const calculateSaleOffPrice = (price: number, saleOff: number) => showPrice(price - (price * (saleOff / 100)));

const Product = (props: any) => {
    const {product, category} = props;
    const showDetail = () => props.history.push(`/${category.name}/${product.id}`);

    return (
        <div className="item_list">
            <a onClick={showDetail}>
                <figure>
                    <img src={product.images[0]?.path} alt="product thumbnail"/>
                </figure>
                <h4>{product.name}</h4>
                {
                    product.saleOff !== 0
                        ?
                        <div>
                            <div className="product-price flex-center">
                                <div className="price saleOff">
                                    {showPrice(product.price)} Đ
                                </div>
                                <div className="price" style={{width: '48%'}}>
                                    {calculateSaleOffPrice(product.price, product.saleOff)} Đ
                                </div>
                            </div>
                            <div className="product-tag">
                                <div className="product-tag-item sale">{product.saleOff}%</div>
                            </div>
                        </div>
                        : <div className="price">{showPrice(product.price)} Đ</div>
                }
            </a>
        </div>
    );
}

export default withRouter(Product);

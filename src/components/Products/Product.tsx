import React from "react";
import { withRouter } from "react-router";
import { calculateSaleOffPrice, showPrice } from "../../common";

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
                                <div className="price">
                                    {calculateSaleOffPrice(product.price, product.saleOff)} đ
                                </div>
                                <div className="price saleOff">
                                    {showPrice(product.price)} đ
                                </div>
                            </div>
                            <div className="product-tag">
                                <div className="product-tag-item sale">{product.saleOff}%</div>
                            </div>
                        </div>
                        : <div className="price">{showPrice(product.price)} đ</div>
                }
            </a>
        </div>
    );
}

export default withRouter(Product);

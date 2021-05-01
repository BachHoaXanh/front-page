import React, {useContext, useState} from 'react';
import {withRouter} from "react-router";
import {calculateSaleOffPrice, removePrefixUpload, showPrice, showThumbnail} from "../../common";
import {CartContext} from "../../contexts/Cart";
import {HOST} from "../../api.common";
import Product from "./Product";

const ProductBody = ({product, products}: any) => {
    const {addToCart} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const decrease = () => setQuantity(quantity - 1);
    const increase = () => setQuantity(quantity + 1);

    const cartClicked = () => {
        setTimeout(() => {
            addToCart(product, quantity);
        }, 500)
        setQuantity(1);
    }

    return (
        <section>
            <div className="short_detail">
                <div className="img">
                    <figure>
                        <a data-fancybox="list-images" target={'_blank'} rel="noreferrer noopener"
                           href={showThumbnail(product)}>
                            <img src={showThumbnail(product)} alt=""/>
                        </a>
                    </figure>
                    {
                        product?.images?.length > 0 &&
                        <aside className="slider_img">
                            {product.images.map((item: any, index: number) =>
                                <a data-fancybox="list-images" target={'_blank'} rel="noreferrer noopener" key={index}
                                   href={`${HOST}/${removePrefixUpload(item.path)}`}>
                                    <span>
                                        <img src={`${HOST}/${removePrefixUpload(item.path)}`} alt=""/>
                                    </span>
                                </a>
                            )}
                        </aside>

                    }
                </div>
                <div className="pro_short"><h1>{product?.name}</h1>
                    <aside className="short_content">{product?.shortDescription}</aside>
                    <div className="fl_price">
                        <label>Giá bán</label>
                        {
                            product?.saleOff !== 0
                                ?
                                <div className="boxPrice">
                                    <span className="n_prices">
                                        {calculateSaleOffPrice(product?.price, product?.saleOff)}<sup>₫</sup>
                                    </span>
                                    <span className="n_prices2">{showPrice(product?.price)}<sup>₫</sup></span>
                                    <label>- {product?.saleOff}%</label>
                                </div>
                                : <span className="n_prices">{showPrice(product?.price)}<sup>₫</sup></span>
                        }
                    </div>
                    <div className="soluong"><label>Số lượng</label>
                        <aside>
                            <span itemType={'button'} onClick={decrease} className="tru">-</span>
                            <span className="sl"> {quantity} </span>
                            <span itemType={'button'} onClick={increase} className="cong">+</span>
                            <input hidden name="quantity" value={quantity} onChange={() => console.log('change')}
                                   type="number" id="SL_cart"/>
                        </aside>
                    </div>
                    <div id="addCart" className="chooseBuy" onClick={cartClicked}>
                        <span>Chọn mua</span>
                    </div>
                </div>
            </div>
            <div className="fl_title" style={{marginTop: '35px'}}><label>Thông tin sản phẩm</label>
                <figure/>
            </div>
            <div className="box_details">
                <aside><p>{product?.description}</p></aside>
            </div>
            <div className="box_title" style={{marginTop: '30px', marginBottom: '20px'}}>
                <label>Có thể bạn quan tâm</label><code/>
            </div>
            {
                products.map((item: any, index: number) => {
                    return (
                        <Product
                            key={index}
                            product={item}
                        />
                    );
                })
            }
        </section>
    );
}

export default withRouter(ProductBody);

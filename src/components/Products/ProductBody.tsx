import React, {useContext, useState} from 'react';
import {withRouter} from "react-router";
import {calculateSaleOffPrice, showPrice} from "../../common";
import {CartContext} from "../../contexts/Cart";

const ProductBody = ({product}: any) => {
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
                    <figure><a data-fancybox="list-images"
                               title="KẸO HỒNG SÂM HIỆU KGC- SÂM CHÍNH PHỦ HÀN QUỐC 240GR"
                               href="https://moclanfruit.com/thuc-pham/combo-heo-nga-441">
                        <img src="https://moclanfruit.com/files/product/combo-heo-nga-bc2v9g0z.gif"
                             alt=""/></a></figure>
                    <aside className="slider_img">
                        <a data-fancybox="list-images"
                           title="ruou-sake-nishinoseki-hana-cmbnbztm.jpg"
                           href="https://moclanfruit.com/thuc-pham/combo-heo-nga-441">
                            <span>
                                <img
                                    src="https://moclanfruit.com/files/product/combo-heo-nga-bc2v9g0z.gif"
                                    alt="ruou-sake-nishinoseki-hana-cmbnbztm.jpg-1"/>
                            </span>
                        </a>
                        <a data-fancybox="list-images" title="ruou-sake-nishinoseki-hana-tjhizasa.jpg"
                           href="https://moclanfruit.com/thuc-pham/combo-heo-nga-441">
                            <span>
                                <img
                                    src="https://moclanfruit.com/files/product/combo-heo-nga-bc2v9g0z.gif"
                                    alt="ruou-sake-nishinoseki-hana-tjhizasa.jpg-2"/>
                            </span>
                        </a>
                        <a data-fancybox="list-images" title="ruou-sake-nishinoseki-hana-300ml-hk3ywgtk.jpg"
                           href="https://moclanfruit.com/thuc-pham/combo-heo-nga-441">
                            <span>
                                <img
                                    src="https://moclanfruit.com/files/product/combo-heo-nga-bc2v9g0z.gif"
                                    alt="ruou-sake-nishinoseki-hana-300ml-hk3ywgtk.jpg-3"/>
                            </span>
                        </a>
                    </aside>
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
            <div className="pro_list">
                <div className="item">
                    <a href="keo-deo-l-il-critters-966.html" title="Kẹo Dẻo L'il Critters ">
                        <figure>
                            <img src="../files/product/keo-deo-l-il-critters-6w5b48cw.jpg"
                                 alt="Kẹo Dẻo L'il Critters "/>
                        </figure>
                        <h4>Kẹo Dẻo L'il Critters </h4>
                        <div className="price">550,000</div>
                    </a></div>
                <div className="item"><a href="banh-bourbon-butter-cookies-952.html"
                                         title=" Bánh Bourbon Butter Cookies">
                    <figure><img src="../files/product/banh-bourbon-butter-cookies-pkt6czux.jpg"
                                 alt=" Bánh Bourbon Butter Cookies"/></figure>
                    <h4> Bánh Bourbon Butter Cookies</h4>
                    <div className="price">Liên Hệ</div>
                </a></div>
                <div className="item"><a href="banh-quy-delicious-951.html" title=" Bánh quy Delicious">
                    <figure><img src="../files/product/banh-quy-delicious-x3jar3d9.jpg" alt=" Bánh quy Delicious"/>
                    </figure>
                    <h4> Bánh quy Delicious</h4>
                    <div className="price">Liên Hệ</div>
                </a></div>
                <div className="item"><a href="banh-quy-bourbon-high-selection-950.html"
                                         title=" Bánh Quy Bourbon High Selection">
                    <figure><img src="../files/product/banh-quy-bourbon-high-selection-rnovmkh8.jpg"
                                 alt=" Bánh Quy Bourbon High Selection"/></figure>
                    <h4> Bánh Quy Bourbon High Selection</h4>
                    <div className="price">Liên Hệ</div>
                </a></div>
                <div className="item"><a href="banh-mi-hoa-cuc-phap-harry-941.html" title="BÁNH MÌ HOA CÚC PHÁP HARRY">
                    <figure><img src="../files/product/banh-mi-hoa-cuc-phap-harry-epchf6gm.jpg"
                                 alt="BÁNH MÌ HOA CÚC PHÁP HARRY"/></figure>
                    <h4>BÁNH MÌ HOA CÚC PHÁP HARRY</h4>
                    <div className="price">130,000</div>
                </a></div>
                <div className="item"><a href="banh-bounbon-torte-nhat-ban-925.html"
                                         title="Bánh Bounbon Torte Nhật Bản">
                    <figure><img src="../files/product/banh-bounbon-torte-nhat-ban-b2s0ltrm.jpg"
                                 alt="Bánh Bounbon Torte Nhật Bản"/></figure>
                    <h4>Bánh Bounbon Torte Nhật Bản</h4>
                    <div className="price">Liên Hệ</div>
                </a></div>
                <div className="item"><a href="banh-quy-bourbon-chocochip-nhat-ban-924.html"
                                         title="BÁNH QUY BOURBON  CHOCOCHIP NHẬT BẢN">
                    <figure><img src="../files/product/banh-quy-bourbon-chocochip-nhat-ban-om7rutr5.jpg"
                                 alt="BÁNH QUY BOURBON  CHOCOCHIP NHẬT BẢN"/></figure>
                    <h4>BÁNH QUY BOURBON CHOCOCHIP NHẬT BẢN</h4>
                    <div className="price">Liên Hệ</div>
                </a></div>
                <div className="item"><a href="banh-bong-lan-socola-kem-pho-mai-haitai-913.html"
                                         title="Bánh bông lan socola kem phô mai Haitai">
                    <figure><img src="../files/product/banh-bong-lan-socola-kem-pho-mai-haitai-sqkllmzs.jpg"
                                 alt="Bánh bông lan socola kem phô mai Haitai"/></figure>
                    <h4>Bánh bông lan socola kem phô mai Haitai</h4>
                    <div className="price">115,000</div>
                </a></div>
                <div className="item"><a href="banh-mx-hearty-butter-pastries-gift-set-206gr-901.html"
                                         title="Bánh MX Hearty Butter Pastries Gift Set 206gr">
                    <figure><img src="../files/product/banh-mx-hearty-butter-pastries-gift-set-206gr-74vjqtut.jpg"
                                 alt="Bánh MX Hearty Butter Pastries Gift Set 206gr"/></figure>
                    <h4>Bánh MX Hearty Butter Pastries Gift Set 206gr</h4>
                    <div className="price">Liên Hệ</div>
                </a></div>
                <div className="item"><a href="banh-mx-pastries-trio-deluxe-331gr-900.html"
                                         title="Bánh MX Pastries Trio Deluxe 331gr">
                    <figure><img src="../files/product/banh-mx-pastries-trio-deluxe-331gr-wi8tdr4v.jpg"
                                 alt="Bánh MX Pastries Trio Deluxe 331gr"/></figure>
                    <h4>Bánh MX Pastries Trio Deluxe 331gr</h4>
                    <div className="price">Liên Hệ</div>
                </a></div>
            </div>
        </section>
    );
}

export default withRouter(ProductBody);

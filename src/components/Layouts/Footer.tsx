import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../../contexts/Cart";
import {useHistory} from "react-router";

const Footer = () => {
    const history = useHistory();
    const {cartItems, clickedCart} = useContext(CartContext);
    const [totalCart, setTotalCart] = useState(0);

    useEffect(() => {
        let totalCartVirtual = 0;

        cartItems.forEach((item: any) => totalCartVirtual += item.count);
        setTotalCart(totalCartVirtual)
    }, [clickedCart, cartItems]);

    const handleClick = (link?: string) => link ? history.push(`/${link}`) : history.push(`/`);

    return (
        <footer>
            <div className="footer_top">
                <section>
                    <div className="f_about">
                        <div className="f_pay"><label>Nhận thanh toán</label>
                            <figure><img src={process.env.PUBLIC_URL + '/thanh-toan.png'} alt="Mộc lan Fruit"/></figure>
                        </div>
                    </div>
                    <div className="f_about"><label>Về chúng tôi</label>
                        <ul>
                            <li onClick={() => handleClick('about')} style={{cursor: 'pointer'}}>
                                <a title="Về chúng tôi">Về chúng tôi</a>
                            </li>
                            <li onClick={() => handleClick('sale')} style={{cursor: 'pointer'}}>
                                <a title="Khuyến mãi">Khuyến mãi</a>
                            </li>
                            <li onClick={() => handleClick('products')} style={{cursor: 'pointer'}}>
                                <a title="Sản phẩm">Sản phẩm</a>
                            </li>
                            <li onClick={() => handleClick('news')} style={{cursor: 'pointer'}}>
                                <a title="Tin tức">Tin tức</a>
                            </li>
                        </ul>
                    </div>
                    <div className="f_contact"><label>Thông tin liên hệ</label>
                        <ol>
                            <li><b>FRUIT SHOP</b></li>
                            <li><b>Address: </b>
                                <span>123 - 456 đường 30/4 - P. Xuân Khánh - Q. Ninh Kiều - TP. Cần Thơ</span>
                            </li>
                            <li><b>Phone: </b><span> 012 xxx xxx</span></li>
                            <li><b>Email: </b><span>cskh@fruitshop.com</span></li>
                        </ol>
                    </div>
                    <div className="f_showroom">
                        <aside>
                            <div className="fb-like-box" data-href="#" data-width="260"
                                 data-height="300" data-colorscheme="light" data-show-faces="true" data-header="false"
                                 data-force-wall="false" data-stream="false" data-show-border="true"/>
                        </aside>
                    </div>
                    <div className="f_tags"/>
                </section>
            </div>
            <div className="footer_bottom">
                <div className="f_parten">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/footer_pattern.png"} alt="Fruit Shop"/>
                    </figure>
                </div>
                <div className="copy">
                    <section>
                        <span>Copyright ® 2021 </span>
                        <label>Thiết kế website</label>
                    </section>
                </div>
            </div>
            <div className="footer_share">
                <div className="cart" onClick={() => handleClick('checkout')}>
                    <a title="Cart">
                        <FontAwesomeIcon style={{fontSize: '2rem', marginTop: '13px', color: '#ffffff'}}
                                         icon={faCartPlus}/>
                        <span className="notify-right cart-total" id="_notify_cart_count">{totalCart}</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

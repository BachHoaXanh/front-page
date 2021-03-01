const Footer = () => {
    return (
        <footer>
            <div className="footer_top">
                <section>
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
                        <img src={"footer_pattern.png"} alt="Fruit Shop"/>
                    </figure>
                </div>
                <div className="copy">
                    <section>
                        <span>Copyright ® 2021 </span>
                        <label>
                            <a href="#" title="Thiết kế website">Thiết kế website</a></label>
                    </section>
                </div>
            </div>
            <div className="footer_share">
                <div className="cart">
                    <a href="gio-hang.html" title="Cart">
                        <img src="images/icon_cart.png" alt="cart"/>
                        <span className="notify-right" style={{backgroundImage: "url(images/icon_chat.png) no-repeat"}}
                              id="_notify_cart_count">0</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

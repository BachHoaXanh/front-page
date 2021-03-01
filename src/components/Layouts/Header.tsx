const Header = () => {
    return (
        <header>
            <div className="header_top">
                <section>
                    <div className="h_right">
                        <label><b>FRUIT SHOP</b> - CHUYÊN HÀNG TRÁI CÂY NHẬP KHẨU CAO CẤP</label>
                        <span className="h_share">
                            <a title="Facebook" className="share" href="https://www.facebook.com/moclanfruit/">
                                <i className="fa fa-facebook"/>
                            </a>

                            <a title="Google" className="share" href="https://plus.google.com/">
                                <i className="fa fa-google-plus"/>
                            </a>
                        </span>
                    </div>
                </section>
            </div>
            <div className="header_nav">
                <div className="box_nav">
                    <section>
                        <nav>
                            <ul>
                                <li><a href="/" title="Trang chủ">Trang chủ</a></li>
                                <li><a href="#" title="Về chúng tôi">Về chúng tôi</a></li>
                                <li style={{position: 'relative'}}>
                                    <a href="#" title="Sản phẩm">Sản phẩm</a>
                                    <i className="fa fa-angle-down"/>
                                    <ul>
                                        <li><h2><a href="#" title="Trái Cây">+ Trái Cây</a></h2></li>
                                        <li><h2><a href="#" title="Trái cây chế biến">+ Trái cây chế biến</a></h2></li>
                                        <li><h2><a href="#" title="Thực phẩm">+ Thực phẩm</a></h2></li>
                                        <li><h2><a href="#" title="Thức uống">+ Thức uống</a></h2></li>
                                        <li><h2><a href="#" title="Nước ép">+ Nước ép</a></h2></li>
                                        <li><h2><a href="#" title="Bánh kẹo">+ Bánh kẹo</a></h2></li>
                                        <li><h2><a href="#" title="Sữa - Nước">+ Sữa - Nước</a></h2></li>
                                        <li><h2><a href="#" title="Sâm">+ Sâm</a></h2></li>
                                        <li><h2><a href="#" title="Các loại hạt">+ Các loại hạt</a></h2></li>
                                        <li><h2><a href="#" title="Hải sản">+ Hải sản</a></h2></li>
                                        <li><h2><a href="#" title="Rượu">+ Rượu</a></h2></li>
                                        <li><h2><a href="#" title="Giỏ quà">+ Giỏ quà</a></h2></li>
                                        <li><h2><a href="#" title="Mỹ Phẩm">+ Mỹ Phẩm</a></h2></li>
                                    </ul>
                                </li>
                                <li><a href="#" title="Tin tức">Tin tức</a></li>
                            </ul>
                            <div className="logo">
                                <a href='#' title="Fruit Shop"><img src={'logo.png'} alt="Fruit Shop"/></a>
                            </div>
                            <ol>
                                <li><a href="#" title="Hệ thống cửa hàng">Hệ thống cửa hàng</a></li>
                                <li><a href="#" title="Liên hệ">Liên hệ</a></li>
                                <li className="search">
                                    <input id="txtSearch" type="text" className="cls_text" placeholder="Từ khóa cần tìm"/>
                                </li>
                            </ol>
                        </nav>
                    </section>
                </div>
                <div className="header_img"><img src={'top1_pattern.png'} alt="Fruit Shop"/></div>
            </div>
        </header>
    );
}

export default Header;

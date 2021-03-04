import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Header = () => {
    return (
        <header>
            <div className="header_top">
                <section>
                    <div className="h_right">
                        <label><b>FRUIT SHOP</b> - CHUYÊN HÀNG TRÁI CÂY NHẬP KHẨU CAO CẤP</label>
                    </div>
                </section>
            </div>
            <div className="header_nav">
                <div className="box_nav">
                    <section>
                        <nav>
                            <ul>
                                <li><a href="/" title="Trang chủ">Trang chủ</a></li>
                                <li><a href="/" title="Tin tức">Tin tức</a></li>
                            </ul>
                            <div className="logo">
                                <a href='/' title="Fruit Shop">
                                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Fruit Shop"/>
                                </a>
                            </div>
                            <ol>
                                <li><a href="/" title="Về chúng tôi">Về chúng tôi</a></li>
                                <li><a href="/" title="Liên hệ">Liên hệ</a></li>
                                <li className="search">
                                    <input id="txtSearch" type="text" className="cls_text"
                                           placeholder="Từ khóa cần tìm"/>
                                    <FontAwesomeIcon icon={faSearch}
                                                     style={{
                                                         fontSize: '22px',
                                                         color: '#008838',
                                                         position: 'absolute',
                                                         top: '35%',
                                                         right: '5%'
                                                     }}/>
                                </li>
                            </ol>
                        </nav>
                    </section>
                </div>
                <div className="header_img">
                    <img src={process.env.PUBLIC_URL + '/top1_pattern.png'} alt="Fruit Shop"/>
                </div>
            </div>
        </header>
    );
}

export default Header;

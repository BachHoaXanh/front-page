import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useHistory} from "react-router";

const Header = (props: any) => {
    const history = useHistory();
    const handleClick = (page?: string) => page ? history.push(`/${page}`) : history.push(`/`);
    const search = () => alert("This feature is coming soon ...");

    return (
        <header>
            <div className="header_top">
                <section>
                    <div className="header_sales">
                        <FontAwesomeIcon icon={faPhoneAlt} style={{marginRight: '5px'}}/>
                        <span>0762 123 456 - 0123 456 789</span>
                    </div>
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
                                <li onClick={() => handleClick()} className={props.activeHome && 'active'}>
                                    <a title="Trang chủ">Trang chủ</a>
                                </li>
                                <li onClick={() => handleClick('about')} className={props.activeAbout && 'active'}>
                                    <a title="Về chúng tôi">Về chúng tôi</a>
                                </li>
                                <li onClick={() => handleClick('products')}
                                    className={props.activeProducts && 'active'}>
                                    <a title="Sản phẩm">Sản phẩm</a>
                                </li>
                                {/*<li onClick={() => handleClick('news')} className={props.activeNews && 'active'}>*/}
                                {/*    <a title="Tin tức">Tin tức</a>*/}
                                {/*</li>*/}
                            </ul>
                            <div className="logo">
                                <a href='/' title="Fruit Shop">
                                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Fruit Shop"/>
                                </a>
                            </div>
                            <ol>
                                {/*<li onClick={() => handleClick('sale')} className={props.activeSale && 'active'}>*/}
                                {/*    <a title="Khuyến mãi">Khuyến mãi</a>*/}
                                {/*</li>*/}
                                <li onClick={() => handleClick('contact')} className={props.activeContact && 'active'}>
                                    <a title="Liên hệ">Liên hệ</a>
                                </li>
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
                                                     }} onClick={search}/>
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

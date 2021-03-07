import React from "react";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTruck, faBalanceScale, faPhoneAlt, faAppleAlt} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div className="Home">
            <Header activeHome={true}/>
            <article>
                <div className="box_banners">
                    <div id="jssor_1"
                         style={{
                             position: 'relative',
                             margin: '0 auto',
                             top: 0,
                             left: 0,
                             width: '1920px',
                             height: '900px',
                             overflow: 'hidden',
                         }}>
                        {/* Loading Screen */}
                        <div data-u="loading" className="jssorl-009-spin"
                             style={{
                                 position: 'absolute',
                                 top: 0,
                                 left: 0,
                                 width: '100%',
                                 height: '100%',
                                 textAlign: 'center',
                                 backgroundColor: 'rgba(0,0,0,0.7)'
                             }}>
                            <img style={{
                                marginTop: '-19px',
                                position: 'relative',
                                top: '50%',
                                width: '38px',
                                height: '38px'
                            }}
                                 src="images/loading.gif" alt="Load"/>
                        </div>
                        <div data-u="slides"
                             style={{
                                 cursor: 'default',
                                 position: 'relative',
                                 top: 0,
                                 left: 0,
                                 width: '1920px',
                                 height: '900px',
                                 overflow: 'hidden'
                             }}>
                            <div data-p="170.00">
                                <a>
                                    <img data-u="image" alt="Tuadenz.vn"
                                         src="https://moclanfruit.com/files/banner/cski2q4zyn7o7glgjugukw0m2uidb11etlxwmcwkp39wjud2zt.jpg"/>
                                </a>
                            </div>
                            <div data-p="170.00">
                                <a title="Banner Rượu Tết 2021" href="#">
                                    <img data-u="image" alt="Tuadenz.vn"
                                         src="https://moclanfruit.com/files/banner/hjge75ihizxhh651fjwltvburo0ujfu1pbgwgodoyl6grbhwvd.jpg"/>
                                </a>
                            </div>
                            <div data-p="170.00">
                                <a title="banner_2" href="#">
                                    <img data-u="image" alt="Tuadenz.vn"
                                         src="files/banner/crf28vg5aip68b8vkv6ft5h9hlifq8ktz0v7vcd6u2c3ekyypf.jpg"/>
                                </a>
                            </div>
                            <div data-p="170.00">
                                <a title="Banner Giỏ Quà Tết 2021" href="#">
                                    <img data-u="image" alt="Tuadenz.vn"
                                         src="files/banner/qgdfuwvkt6t4rwjxxurgnrnwzs2x2nssd6yx24svala2rtzpnq.jpg"/>
                                </a>
                            </div>
                            <div data-p="170.00">
                                <a title="banner_3" href="#">
                                    <img data-u="image" alt="Tuadenz.vn"
                                         src="files/banner/cski2q4zyn7o7glgjugukw0m2uidb11etlxwmcwkp39wjud2zt.jpg"/>
                                </a>
                            </div>
                            <div data-p="170.00">
                                <a title="banner-thit" href="#">
                                    <img data-u="image" alt="Tuadenz.vn"
                                         src="files/banner/qz7jtqe03f0wq6r4siwqguypgxfqfwy6w5qzv40zk0va7xezga.jpg"/>
                                </a>
                            </div>
                        </div>
                        {/* Bullet Navigator */}
                        {/*<div data-u="navigator" className="jssorb053"*/}
                        {/*     style={{position: 'absolute', bottom: '12px', right: '12px'}}*/}
                        {/*     data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">*/}
                        {/*    <div data-u="prototype" className="i" style={{width: '16px', height: '16px'}}>*/}
                        {/*        <svg viewBox="0 0 16000 16000"*/}
                        {/*             style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>*/}
                        {/*            <path className="b"*/}
                        {/*                  d="M11400,13800H4600c-1320,0-2400-1080-2400-2400V4600c0-1320,1080-2400,2400-2400h6800 c1320,0,2400,1080,2400,2400v6800C13800,12720,12720,13800,11400,13800z"/>*/}
                        {/*        </svg>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/* Arrow Navigator */}
                        {/*<div data-u="arrowleft" className="jssora093"*/}
                        {/*     style={{width: '50px', height: '50px', top: 0, left: '30px'}}*/}
                        {/*     data-autocenter="2" data-scale="0.75" data-scale-left="0.75">*/}
                        {/*    <svg viewBox="0 0 16000 16000"*/}
                        {/*         style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>*/}
                        {/*        <circle className="c" cx="8000" cy="8000" r="5920"></circle>*/}
                        {/*        <polyline className="a" points="7777.8,6080 5857.8,8000 7777.8,9920 "></polyline>*/}
                        {/*        <line className="a" x1="10142.2" y1="8000" x2="5857.8" y2="8000"></line>*/}
                        {/*    </svg>*/}
                        {/*</div>*/}
                        {/*<div data-u="arrowright" className="jssora093"*/}
                        {/*     style={{width: '50px', height: '50px', top: 0, right: '30px'}}*/}
                        {/*     data-autocenter="2" data-scale="0.75" data-scale-right="0.75">*/}
                        {/*    <svg viewBox="0 0 16000 16000"*/}
                        {/*         style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>*/}
                        {/*        <circle className="c" cx="8000" cy="8000" r="5920"></circle>*/}
                        {/*        <polyline className="a" points="8222.2,6080 10142.2,8000 8222.2,9920 "></polyline>*/}
                        {/*        <line className="a" x1="5857.8" y1="8000" x2="10142.2" y2="8000"></line>*/}
                        {/*    </svg>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="box_tienich">
                    <section>
                        <ul>
                            <li>
                                <figure>
                                    <FontAwesomeIcon icon={faTruck} style={{
                                        width: '40px',
                                        height: '70px',
                                        color: 'white',
                                        marginLeft: '5px'
                                    }}/>
                                </figure>
                                <aside><label>Giao hàng</label>
                                    <p>Tận Nơi - Thanh Toán Tại Nhà</p></aside>
                            </li>
                            <li>
                                <figure>
                                    <FontAwesomeIcon icon={faAppleAlt}
                                                     style={{width: '38px', height: '67px', color: 'white'}}/>
                                </figure>
                                <aside><label>Sản phẩm</label>
                                    <p>Cam kết 100% hàng nhập khẩu</p></aside>
                            </li>
                            <li>
                                <figure>
                                    <FontAwesomeIcon icon={faBalanceScale}
                                                     style={{width: '44px', height: '70px', color: 'white'}}/>
                                </figure>
                                <aside><label>Khuyến mãi</label>
                                    <p>Luôn có chương trình khuyến mãi tại Fruit Shop</p></aside>
                            </li>
                            <li>
                                <figure>
                                    <FontAwesomeIcon icon={faPhoneAlt}
                                                     style={{width: '32px', height: '70px', color: 'white'}}/>
                                </figure>
                                <aside>
                                    <label>Hỗ trợ</label>
                                    <p>Hotline: 0762 123 456</p>
                                </aside>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="box_pages" style={{backgroundColor: '#ffffff', padding: '40px 0'}}>
                    <section>
                        <div className="about_left">
                            <div className="fl_title" style={{marginLeft: '20px'}}>
                                <label>Giới thiệu về Fruit Shop</label>
                                <figure/>
                            </div>
                            <aside>
                                <p>
                                    <p> Fruit Shop l&agrave; chuỗi cửa h&agrave;ng tr&aacute;i c&acirc;y sạch
                                        h&agrave;ng đầu Việt Nam. Với sứ mệnh mang đến cho người ti&ecirc;u d&ugrave;ng
                                        Việt Nam những sản phẩm tr&aacute;i c&acirc;y mang thương hiệu Việt
                                        v&agrave; tr&aacute;i c&acirc;y ngoại nhập với
                                        chất lượng tốt nhất. H&atilde;y c&ugrave;ng Fruit Shop bảo vệ sức khỏe gia
                                        đ&igrave;nh bạn.
                                    </p>
                                </p>
                            </aside>
                            <ul>
                                <li><code>Sản Phẩm Chất Lượng Cao</code>
                                    <p>Tại Fruit Shop, các sản phẩm đều đạt tiêu chuẩn VietGAP hoặc GlobalGAP. Các sản
                                        phẩm
                                        tại Fruit Shop được bảo quản tốt nhất, đảm bảo chất lượng nhất khi đến tay người
                                        tiêu dùng. </p>
                                </li>
                                <li><code>Nhà Cung Cấp Đáng Tin Cậy</code>
                                    <p>Các đối tác của Fruit Shop là những nhà vườn, những hợp tác xã hoặc những thương
                                        hiệu trái cây đã đươc kiểm chứng. Nguồn gốc sản phẩm luôn rõ ràng với đầy đủ các
                                        chứng nhận cần thiết.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="about_right">
                            <figure><img src={process.env.PUBLIC_URL + '/gogouya-fruits.jpg'} alt="Fruit Shop"/></figure>
                        </div>
                    </section>
                </div>
            </article>
            <Footer/>
        </div>
    );
}

export default Home;

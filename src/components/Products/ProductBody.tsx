import React, { useContext, useEffect, useRef, useState } from 'react';
import { withRouter } from "react-router";
import { calculateSaleOffPrice, showPrice } from "../../common";

const ProductBody = (props: any) => {
    const {product} = props;
    const [quantity, setQuantity] = useState(1);

    const decrease = () => setQuantity(quantity - 1);
    const increase = () => setQuantity(quantity + 1);

    const addToCart = () => {
        alert('added')
    };

    console.log('quantity', quantity)

    return (
        <section>
            <div className="short_detail">
                <div className="img">
                    <figure><a data-fancybox="list-images"
                               title="KẸO HỒNG SÂM HIỆU KGC- SÂM CHÍNH PHỦ HÀN QUỐC 240GR"
                               href="../files/product/keo-hong-sam-hieu-kgc-sam-chinh-phu-han-quoc-240gr-fem2nyzu.jpg">
                        <img src="../files/product/keo-hong-sam-hieu-kgc-sam-chinh-phu-han-quoc-240gr-fem2nyzu.jpg"
                             alt=""/></a></figure>
                    <aside className="slider_img">
                        <a data-fancybox="list-images"
                           title="ruou-sake-nishinoseki-hana-cmbnbztm.jpg"
                           href="../files/product/ruou-sake-nishinoseki-hana-cmbnbztm.jpg"><span><img
                            src="../files/product/ruou-sake-nishinoseki-hana-cmbnbztm.jpg"
                            alt="ruou-sake-nishinoseki-hana-cmbnbztm.jpg-1"/></span></a>
                        <a data-fancybox="list-images" title="ruou-sake-nishinoseki-hana-tjhizasa.jpg"
                           href="../files/product/ruou-sake-nishinoseki-hana-tjhizasa.jpg"><span><img
                            src="../files/product/ruou-sake-nishinoseki-hana-tjhizasa.jpg"
                            alt="ruou-sake-nishinoseki-hana-tjhizasa.jpg-2"/></span></a>
                        <a data-fancybox="list-images" title="ruou-sake-nishinoseki-hana-300ml-hk3ywgtk.jpg"
                           href="../files/product/ruou-sake-nishinoseki-hana-300ml-hk3ywgtk.jpg"><span><img
                            src="../files/product/ruou-sake-nishinoseki-hana-300ml-hk3ywgtk.jpg"
                            alt="ruou-sake-nishinoseki-hana-300ml-hk3ywgtk.jpg-3"/></span></a></aside>
                </div>
                <div className="pro_short"><h1>{product?.name}</h1>
                    <aside className="short_content">{product?.shortDescription}</aside>
                    <div className="fl_price">
                        <label>Giá bán</label>
                        {
                            product?.saleOff !== 0
                                ?
                                <div className="boxPrice">
                                    <span className="n_prices">{calculateSaleOffPrice(product?.price, product?.saleOff)} đ</span>
                                    <span className="n_prices2">{showPrice(product?.price)} đ</span>
                                    <label>-{product?.saleOff}%</label>
                                </div>
                                : <span className="n_prices">{showPrice(product?.price)} đ</span>
                        }
                    </div>
                    <div className="soluong"><label>Số lượng</label>
                        <aside>
                            <span itemType={'button'} onClick={decrease} className="tru">-</span>
                            <span className="sl"> {quantity} </span>
                            <span itemType={'button'} onClick={increase} className="cong">+</span>
                            <input hidden name="quantity" value={quantity} onChange={()=> console.log('change')}
                                   type="number" id="SL_cart"/>
                        </aside>
                    </div>
                    <div id="addCart" data-price="" className="chooseBuy" onClick={addToCart}>
                        <span>Chọn mua</span>
                    </div>
                </div>
            </div>
            <div className="fl_title" style={{marginTop: '35px'}}><label>Thông tin sản phẩm</label>
                <figure/>
            </div>
            <div className="box_details">
                <aside>
                    <p>{product?.description}</p>
                    <p>Sản phẩm cao cấp của tập đo&agrave;n Cheong Kwan Jang - một trong những tập đo&agrave;n lớn
                        được ch&iacute;nh phủ H&agrave;n Quốc bảo trợ sản phẩm.</p>
                    <p><img alt="????" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t2/1/16/1f60d.png" width="16"/> Hộp
                        thiếc với thiết kế sang trọng, th&iacute;ch hợp l&agrave;m qu&agrave; biếu, tặng Tết.</p>
                    <p><img alt="????" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t50/1/16/1f525.png"
                            width="16"/> Th&agrave;nh
                        phần:</p>
                    <p><img alt="????" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f449.png" width="16"/> Được
                        l&agrave;m từ sự kết hợp giữa tinh chất v&agrave; bột hồng s&acirc;m 6 tuổi, hương vị thơm
                        ngon tươi m&aacute;t.</p>
                    <p><img alt="????" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f449.png" width="16"/> Hồng
                        s&acirc;m H&agrave;n Quốc c&oacute; chứa 34 loại saponin kh&aacute;c nhau v&agrave; những
                        th&agrave;nh
                        phần hoạt t&iacute;nh đa dạng, tất cả tương t&aacute;c để c&ugrave;ng nhau kiểm so&aacute;t
                        c&aacute;c chức năng sinh l&yacute; cơ thể nhằm đưa cơ thể trở lại trạng th&aacute;i hoạt
                        động b&igrave;nh thường.</p>
                    <p style={{textAlign: 'center'}}><img alt="Không có mô tả ảnh."
                                                          src="../../scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/144208052_3736252776464018_1723908137636131779_o207a.jpg?_nc_cat=109&amp;ccb=2&amp;_nc_sid=8bfeb9&amp;_nc_ohc=oLc04HETPp8AX9mxQBO&amp;_nc_ht=scontent.fsgn5-6.fna&amp;oh=b6c3c2250d84b9de337e4773d50fad8c&amp;oe=603F8B0A"
                                                          width="600"/></p>
                    <p><img alt="????" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t50/1/16/1f525.png"
                            width="16"/> C&ocirc;ng
                        dụng</p>
                    <p><img alt="????" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f449.png" width="16"/> Bồi
                        bổ cơ thể suy nhược, tạo cảm gi&aacute;c tỉnh t&aacute;o.</p>
                    <p><img alt="????" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f449.png"
                            width="16"/> Gi&uacute;p
                        cơ thể thư gi&atilde;n v&agrave; lấy lại c&acirc;n bằng tinh thần.</p>
                    <p><img alt="????" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f449.png" width="16"/> Thảo
                        dược tự nhi&ecirc;n gi&uacute;p cho thơm miệng, chất c&oacute; trong kẹo gi&uacute;p tăng
                        cường sức khỏe v&agrave; l&agrave;m chắc răng.</p>
                    <p><img alt="????" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f449.png" width="16"/> Bồi
                        bổ cơ thể suy dinh dưỡng, hoạt động v&agrave; l&agrave;m việc qu&aacute; sức.</p>
                    <p><img alt="????" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f449.png" width="16"/> Điều
                        ho&agrave; hệ thống miễn dịch gi&uacute;p chống lại cảm c&uacute;m, cảm lạnh.</p>
                    <p><img alt="????" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t50/1/16/1f525.png"
                            width="16"/> M&agrave;u
                        sắc, m&ugrave;i vị: M&agrave;u v&agrave;ng nhẹ đặc trưng, m&ugrave;i s&acirc;m đặc trưng cho
                        sản phẩm.</p>
                    <p><strong><span style={{color: '#e74c3c'}}>★★★</span>&nbsp;</strong><strong><a
                        href="../index.html">MỘC
                        LAN FRUIT</a>&nbsp;</strong>- Thế Giới Sản Phẩm Nhập Khẩu Chất Lượng h&agrave;ng đầu tại
                        TP.Cần Thơ.&nbsp;<strong><a href="../trai-cay-16.html">Tr&aacute;i C&acirc;y Nhập
                            Khẩu</a></strong> xanh - sạch, được kiểm định nghiệm ngặt v&agrave; đạt chuẩn VietGap.
                        Nguồn <strong><a href="../banh-keo-19.html">B&aacute;nh Nhập Khẩu</a></strong> chất lượng
                        với nguồn gốc xuất xứ r&otilde; r&agrave;ng.&nbsp;Hệ thống <strong><a
                            href="../thuc-pham-24.html">Thực Phẩm</a></strong> - <a
                            href="../hai-san-20.html"><strong>Hải Sản Nhập Khẩu</strong></a> tươi được l&agrave;m
                        sạch v&agrave; đ&oacute;ng g&oacute;i kĩ lưỡng, h&agrave;ng&nbsp;đ&ocirc;ng lạnh ATVS. Những
                        <a href="../gio-qua-25.html"><strong>Giỏ Qu&agrave; Nhập Khẩu</strong></a>, Qu&agrave; tặng
                        b&aacute;nh kẹo, tr&aacute;i c&acirc;y g&oacute;i gọn g&agrave;ng, thuận tiện v&agrave; mang
                        &yacute; nghĩa cho người nhận.</p>
                    <p><img alt="" height="16"
                            src="../../static.xx.fbcdn.net/images/emoji.php/v9/t4d/1/16/1f4de.png" width="16"/>Alo
                        ngay <strong><span style={{color: '#e74c3c'}}>Mộc Lan Fruit</span> </strong>để được ship h&agrave;ng
                        nhanh ch&oacute;ng:<strong> </strong><span style={{color: '#e74c3c'}}><strong>093.111.2512 - 090.124.277</strong></span>
                    </p>
                    <ol className="f_address">
                        <li style={{marginTop: '15px', marginBottom: '10px'}}><b style={{color: '#008838!important'}}>MỘC
                            LAN FRUIT</b></li>
                        <li><b>Địa
                            chỉ: </b><span>340 - 342 đường 30/4 - P. Xuân Khánh - Q. Ninh Kiều - TP. Cần Thơ</span>
                        </li>
                        <li><b>Điện thoại: </b><span> 093 111 25 12 - 0901 24 2772</span></li>
                        <li><b>Email: </b><span>cskh@moclanfruit.com</span></li>
                    </ol>
                    <div className="key_tab"><i className="fa fa-tags "/>
                        <h3><a href="../trai-cay-16.html" title="Trái cây nhập khẩu">Trái cây nhập khẩu</a>,&nbsp;<a
                            href="../san-pham.html" title="Thực phẩm nhập khẩu">Thực phẩm nhập khẩu</a>,&nbsp;<a
                            href="../banh-keo-19.html" title="Bánh nhập khẩu">Bánh nhập khẩu</a>,&nbsp;<a
                            href="../banh-keo-19.html" title="Kẹo nhập khẩu">Kẹo nhập khẩu</a>,&nbsp;<a
                            href="../hai-san-20.html" title="Hải sản nhập khẩu">Hải sản nhập khẩu</a>,&nbsp;<a
                            href="../san-pham.html" title="Kem nhập khẩu">Kem nhập khẩu</a></h3></div>
                </aside>
            </div>
            <div className="box_title" style={{marginTop: '30px', marginBottom: '20px'}}>
                <label>Có thể bạn quan tâm</label><code/>
            </div>
            <div className="pro_list">
                <div className="item">
                    <a href="keo-deo-l-il-critters-966.html" title="Kẹo Dẻo L'il Critters ">
                    <figure>
                        <img src="../files/product/keo-deo-l-il-critters-6w5b48cw.jpg" alt="Kẹo Dẻo L'il Critters "/>
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

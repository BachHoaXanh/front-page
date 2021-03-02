import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import axios from "axios";
import {API_CATEGORIES} from "../../api.common";

const Products = (props: any) => {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const {sortedCategory} = props;
    console.log(sortedCategory)

    const chooseCateLink = (event: any) => {
        history.push(`/${(event.target.id).toLowerCase().split(' ').join('-')}`)
        alert('click')
    }

    useEffect(() => {
       setProducts(props.products);

       axios.get(`${API_CATEGORIES}`).then((res) => {
           setCategories(res.data);
       })
    }, [props.products]);

    sortedCategory.forEach((item: any) => {
        const category: any = categories.find((it: any) => it.id === parseInt(item.categoryId));
        item.name = category?.name;
    });

    return (
        <section>
            <div className="f_left" id="fix_left">
                <div className="fl_title">
                    <label>Danh mục sản phẩm</label>
                    <figure/>
                </div>
                <div className="box_cate">
                    <ul>
                        {sortedCategory.map((item: any, index: any) =>
                            <li key={index} id={item.id}>
                                <h3><a href="#" onClick={chooseCateLink} title="Trái Cây">
                                    <i className="fa fa-caret-right"/>{item.name}</a></h3>
                                <code>123</code>
                            </li>

                            // <div
                            //     className="shopbody-filter-catelink"
                            //     key={index}
                            //     id={item.productCate}
                            //     onClick={chooseCateLink}
                            // >
                            //     {item.productCate}
                            // </div>
                        )}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Trái Cây"><i className="fa fa-caret-right"/> Trái Cây</a></h3>*/}
                        {/*    <code>142</code>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Thực phẩm"><i className="fa fa-caret-right"/> Thực phẩm</a></h3>*/}
                        {/*    <code>100</code>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Thức uống"><i className="fa fa-caret-right"/> Thức uống</a></h3>*/}
                        {/*    <code>18</code>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Nước ép"><i className="fa fa-caret-right"/> Nước ép</a></h3>*/}
                        {/*    <code>13</code>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Bánh kẹo"><i className="fa fa-caret-right"/> Bánh kẹo</a></h3>*/}
                        {/*    <code>144</code>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Sữa - Nước"><i className="fa fa-caret-right"/> Sữa - Nước</a></h3>*/}
                        {/*    <code>42</code>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Sâm"><i className="fa fa-caret-right"/> Sâm</a></h3>*/}
                        {/*    <code>34</code>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Các loại hạt"><i className="fa fa-caret-right"/> Các loại hạt</a>*/}
                        {/*    </h3>*/}
                        {/*    <code>20</code>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Hải sản"><i className="fa fa-caret-right"/> Hải sản</a></h3>*/}
                        {/*    <code>31</code>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Rượu"><i className="fa fa-caret-right"/> Rượu</a></h3>*/}
                        {/*    <code>44</code>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Giỏ quà"><i className="fa fa-caret-right"/> Giỏ quà</a></h3>*/}
                        {/*    <code>164</code>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <h3><a href="#" title="Mỹ Phẩm"><i className="fa fa-caret-right"/> Mỹ Phẩm</a></h3>*/}
                        {/*    <code>17</code>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
            <div className="f_right">
                <div className="fl_title"><h1>Tên Danh mục</h1>
                    <figure/>
                </div>
                <div className="box_list">
                    <div className="item_list">
                        <a href="banh-keo/keo-hong-sam-hieu-kgc-sam-chinh-phu-han-quoc-240gr-972.html"
                           title="KẸO HỒNG SÂM HIỆU KGC- SÂM CHÍNH PHỦ HÀN QUỐC 240GR">
                            <figure>
                                <img src="files/product/keo-hong-sam-hieu-kgc-sam-chinh-phu-han-quoc-240gr-fem2nyzu.jpg"
                                     alt="KẸO HỒNG SÂM HIỆU KGC- SÂM CHÍNH PHỦ HÀN QUỐC 240GR"/>
                            </figure>
                            <h4>KẸO HỒNG SÂM HIỆU KGC- SÂM CHÍNH PHỦ HÀN QUỐC 240GR</h4>
                            <div className="price">Liên Hệ</div>
                        </a></div>
                    <div className="item_list">
                        <a href="thuc-pham/tra-hong-sam-han-quoc-jeong-won-970.html"
                           title="Trà hồng sâm Hàn Quốc Jeong Won">
                            <figure>
                                <img src="files/product/tra-hong-sam-han-quoc-jeong-won-ugdrktwp.jpg"
                                     alt="Trà hồng sâm Hàn Quốc Jeong Won"/>
                            </figure>
                            <h4>Trà hồng sâm Hàn Quốc Jeong Won</h4>
                            <div className="price">480,000</div>
                        </a></div>
                    <div className="item_list">
                        <a href="trai-cay/tao-kinsei-nhat-ban-968.html" title="Táo Kinsei Nhật Bản">
                            <figure>
                                <img src="files/product/tao-kinsei-nhat-ban-thvxkxev.jpg" alt="Táo Kinsei Nhật Bản"/>
                            </figure>
                            <h4>Táo Kinsei Nhật Bản</h4>
                            <div className="price">Liên Hệ</div>
                        </a></div>
                    <div className="item_list">
                        <a href="gio-qua/a170-gio-qua-nhap-khau-967.html" title="A170  - Giỏ quà nhập khẩu">
                            <figure>
                                <img src="files/product/a170-gio-qua-nhap-khau-n47dy3tv.jpg"
                                     alt="A170  - Giỏ quà nhập khẩu"/>
                            </figure>
                            <h4>A170 - Giỏ quà nhập khẩu</h4>
                            <div className="price">Liên Hệ</div>
                        </a></div>
                    <div className="item_list">
                        <a href="banh-keo/keo-deo-l-il-critters-966.html" title="Kẹo Dẻo L'il Critters ">
                            <figure>
                                <img src="files/product/keo-deo-l-il-critters-6w5b48cw.jpg"
                                     alt="Kẹo Dẻo L'il Critters "/>
                            </figure>
                            <h4>Kẹo Dẻo L'il Critters </h4>
                            <div className="price">550,000</div>
                        </a></div>
                    <div className="item_list"><a href="ruou/bia-boom-heineken-5l-965.html"
                                                  title="Bia Boom Heineken 5L">
                        <figure><img src="files/product/bia-boom-heineken-5-lit-cua-ha-lan-rartbg4s.jpg"
                                     alt="Bia Boom Heineken 5L"/></figure>
                        <h4>Bia Boom Heineken 5L</h4>
                        <div className="price">Liên Hệ</div>
                    </a></div>
                    <div className="item_list"><a href="gio-qua/a169-hop-qua-tang-tet-964.html"
                                                  title="A169 - Hộp quà tặng Tết">
                        <figure><img src="files/product/a169-hop-qua-tang-tet-6wvft7oy.jpg"
                                     alt="A169 - Hộp quà tặng Tết"/></figure>
                        <h4>A169 - Hộp quà tặng Tết</h4>
                        <div className="price">1,543,000</div>
                    </a></div>
                    <div className="item_list"><a href="gio-qua/a168-hop-qua-tang-tet-963.html"
                                                  title="A168 - Hộp quà tặng Tết">
                        <figure><img src="files/product/a168-gio-qua-nhap-khau-7hq93ne4.jpg"
                                     alt="A168 - Hộp quà tặng Tết"/></figure>
                        <h4>A168 - Hộp quà tặng Tết</h4>
                        <div className="price">Liên Hệ</div>
                    </a></div>
                    <div className="item_list"><a href="gio-qua/a167-hop-qua-tang-tet-962.html"
                                                  title="A167 - Hộp quà tặng Tết">
                        <figure><img src="files/product/a166-hop-qua-tang-tet-7wtvf5vr.jpg"
                                     alt="A167 - Hộp quà tặng Tết"/></figure>
                        <h4>A167 - Hộp quà tặng Tết</h4>
                        <div className="price">Liên Hệ</div>
                    </a></div>
                    <div className="item_list"><a href="gio-qua/a166-hop-qua-tang-tet-961.html"
                                                  title="A166 - Hộp quà tặng Tết">
                        <figure><img src="files/product/a166-hop-qua-tang-tet-g4ssj4qm.jpg"
                                     alt="A166 - Hộp quà tặng Tết"/></figure>
                        <h4>A166 - Hộp quà tặng Tết</h4>
                        <div className="price">Liên Hệ</div>
                    </a></div>
                    <div className="item_list"><a href="gio-qua/a165-gio-qua-nhap-khau-960.html"
                                                  title="A165 - Giỏ quà nhập khẩu">
                        <figure><img src="files/product/a165-gio-qua-nhap-khau-wlmn6k4l.jpg"
                                     alt="A165 - Giỏ quà nhập khẩu"/></figure>
                        <h4>A165 - Giỏ quà nhập khẩu</h4>
                        <div className="price">Liên Hệ</div>
                    </a></div>
                </div>
                <div className="divtrang" style={{marginTop: "20px"}}>
                    <div className="pagination load-product"><a className="active" data-page="1"
                                                                href="javascript:void(0);">1</a><a
                        className="page-pagination" data-page="2" href="javascript:void(0);">2</a><a
                        className="page-pagination" data-page="3" href="javascript:void(0);">3</a><a
                        className="page-pagination" data-page="4" href="javascript:void(0);">4</a><a
                        className="page-pagination" data-page="5" href="javascript:void(0);">5</a><a data-page="2"
                                                                                                     href="javascript:void(0);"
                                                                                                     className="page-pagination"><i
                        className="fa fa-angle-right"/></a><a data-page="25" href="javascript:void(0);"
                                                              className="page-pagination"><i
                        className="fa fa-angle-double-right"/></a></div>
                </div>
            </div>
        </section>
    );
}

export default Products;

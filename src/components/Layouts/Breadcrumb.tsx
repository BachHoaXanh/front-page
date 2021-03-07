import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router";

const Breadcrumb = (props: any) => {
    const history = useHistory();
    const {category, product} = props;
    const chooseCateLink = (categorySlug: string) => history.push(`/categories/${categorySlug}`);

    return (
        <div className="div_title">
            <section>
                <div className="div_right">
                    <div>
                        <a href="/" itemProp="url" title="Trang chủ" className="active">Trang chủ</a>
                    </div>
                    {
                        props.activeProduct &&
                        <div style={{paddingRight: 0}}>
                            <code><FontAwesomeIcon icon={faAngleRight} className="breadcrumb-arrow"/></code>
                            <div>
                                <div title="Products" style={{paddingRight: 0}}>Sản phẩm</div>
                            </div>
                        </div>
                    }
                    {
                        props.activeAbout &&
                        <div>
                            <code><FontAwesomeIcon icon={faAngleRight} className="breadcrumb-arrow"/></code>
                            <div>
                                <div title="About Us">Về chúng tôi</div>
                            </div>
                        </div>
                    }
                    {
                        props.activeContact &&
                        <div>
                            <code><FontAwesomeIcon icon={faAngleRight} className="breadcrumb-arrow"/></code>
                            <div>
                                <div title="Contact Us">Liên hệ</div>
                            </div>
                        </div>
                    }
                    {
                        props.activeNews &&
                        <div>
                            <code><FontAwesomeIcon icon={faAngleRight} className="breadcrumb-arrow"/></code>
                            <div>
                                <div title="News">Tin tức</div>
                            </div>
                        </div>
                    }
                    {
                        props.activeSale &&
                        <div>
                            <code><FontAwesomeIcon icon={faAngleRight} className="breadcrumb-arrow"/></code>
                            <div>
                                <div title="Sale">Khuyến mãi</div>
                            </div>
                        </div>
                    }
                    {
                        category &&
                        <div>
                            <code><FontAwesomeIcon icon={faAngleRight} className="breadcrumb-arrow"/></code>
                            <div title={category} style={{cursor: 'pointer', paddingRight: 0}}
                                 onClick={() => chooseCateLink(category)}>
                                {category}
                            </div>
                        </div>
                    }
                    {
                        product &&
                        <div>
                            <code><FontAwesomeIcon icon={faAngleRight} className="breadcrumb-arrow"/></code>
                            <div>
                                <div title={product.name}>
                                    {product.name}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </div>
    );
}

export default Breadcrumb;

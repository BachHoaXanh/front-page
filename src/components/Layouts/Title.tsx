import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router";

const Title = (props: any) => {
    const history = useHistory();
    const {category, product} = props;
    const chooseCateLink = (categoryName: string) => history.push(`/${categoryName}`);

    return (
        <div className="div_title">
            <section>
                <div className="div_right">
                    <div>
                        <a href="/" itemProp="url" title="Trang chủ" className="active">Trang chủ</a>
                    </div>
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

export default Title;

import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    faAngleRight,
    faCartPlus,
    faChevronLeft,
    faChevronRight,
    faHeart,
    faMinus,
    faPlus
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContext } from "../../contexts/Cart";

const ProductBody = (props: any) => {
    let slugSex: any;
    let today: any = new Date();
    let {product} = props;
    console.log(product)
    let productDate: any = new Date(product.productDate);

    const sliderWidth = useRef(null);
    const productSmall = useRef(null);
    const [hover, setHover] = useState(false);
    const [loading, setLoading] = useState(0);
    const [imgIndex, setImgIndex] = useState(0);
    const [countCart, setCountCart] = useState(1);
    const [zoom, setZoom] = useState(`0% 0%`);
    const {addToCart, addToWishList} = useContext(CartContext);

    const cartClick = () => {
        setLoading(1);
        setTimeout(() => {
            setLoading(0)
            addToCart(product, countCart)
        }, 500);
        setCountCart(1);
    };

    const wishListClick = () => {
        setLoading(2);
        setTimeout(() => {
            setLoading(0)
            addToWishList(product)
        }, 500);
    };

    const handleMouseMove = (e: any) => {
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;

        setZoom(`${x}% ${y}%`);
    };

    useEffect(() => {

    });

    return (
        <div className="ProductBody">
            <div className="product-breadcrumb flex">
                <Link to="/" className="breadcrumb-item breadcrumb-link">Home</Link>
                <FontAwesomeIcon icon={faAngleRight} className="breadcrumb-arrow"/>
                <Link to={slugSex} className="breadcrumb-item breadcrumb-link"/>
                <FontAwesomeIcon icon={faAngleRight} className="breadcrumb-arrow"/>
                <div className="breadcrumb-item breadcrumb-product">{product.name}</div>
            </div>

            <div className="product-detail flex">
                <div className="product-gallery flex"
                     onMouseEnter={() => setHover(true)}
                     onMouseLeave={() => setHover(false)}>
                    <div className="product-small" ref={productSmall}>
                        {product.productImg && product.productImg.map((item: any, index: any) => {
                            return (
                                <div
                                    key={index}
                                    className={imgIndex === index ? "product-small-item product-small-item-active" : "product-small-item"}>
                                    <img src={item} onClick={() => setImgIndex(index)} alt=""/>
                                </div>
                            );
                        })}
                    </div>
                    <div
                        className="product-slider flex"
                        onMouseMove={handleMouseMove}
                        ref={sliderWidth}
                    >
                        <div className="product-tag">
                            {product.productSale > 0 &&
                            <div className="product-tag-item sale">{product.productSale}%</div>}
                            {product.productSold >= 40 && <div className="product-tag-item hot">HOT</div>}
                            {
                                (today - productDate) / (1000 * 3600 * 24) < 10 &&
                                <div className="product-tag-item new">NEW</div>
                            }
                        </div>
                        {product.productImg && product.productImg.map((item: any, index: any) => {
                            // @ts-ignore
                            const width = sliderWidth?.current.offsetWidth;

                            return (
                                <div
                                    key={index}
                                    className="product-big flex"
                                    style={{
                                        transform: `translateX(-${width * imgIndex}px`,
                                        backgroundImage: `url(${item})`,
                                        backgroundPosition: `${zoom}`
                                    }}>
                                    <div className="product-big-item">
                                        <img id={index} className="nodrag" style={{width: `${width}px`}}
                                             src={item} alt=""/>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="change-product left"
                             onClick={() => {
                                 if (imgIndex > 0) setImgIndex(imgIndex - 1)
                             }}>
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </div>
                        <div className="change-product right"
                             onClick={() => {
                                 if (imgIndex < product.productImg.length && product.productImg.length)
                                     setImgIndex(imgIndex + 1)
                             }}
                        >
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </div>
                    </div>
                </div>
                <div className="product-info-detail">
                    <div className="product-info-title">{product.productName}</div>
                    <div className="product-info-des">{product.productDes}</div>
                    {
                        product.productFinalPrice && product.productFinalPrice < product.productPrice &&
                        <div className="product-info-price">
                            <span style={{
                                textDecoration: 'line-through',
                                color: '#777',
                                marginRight: '10px',
                                fontSize: '10px'
                            }}>{product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Đ</span>
                            <span
                                style={{height: 'max-content'}}>{product.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Đ</span>
                        </div>
                    }
                    {
                        product.productFinalPrice && product.productFinalPrice === product.productPrice &&
                        <div className="product-info-price">
                            {(product.productPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Đ
                        </div>
                    }
                    <div className="product-info-cart flex">
                        <div className="count-cart noselect">
                            <div className="count-cart-item left flex-center"
                                 onClick={() => {
                                     if (countCart > 1) setCountCart(countCart - 1)
                                 }}
                            >
                                <FontAwesomeIcon icon={faMinus}/>
                            </div>
                            <div className="count-cart-item text flex-center">
                                <form>
                                    <input
                                        type="text"
                                        value={countCart}
                                        onChange={(e) => {
                                            setCountCart(Number(e.target.value.replace(/\D+/g, '')))
                                        }}
                                    />
                                </form>
                            </div>
                            <div className="count-cart-item right flex-center" onClick={() => {
                                setCountCart(countCart + 1)
                            }}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>
                        </div>
                        {loading === 1 &&
                        <div className="product-info-addtocart flex-center btn" onClick={cartClick}>
                            <div className="loading-icon"/>
                        </div>
                        }
                        {loading !== 1 &&
                        <div className="product-info-addtocart flex-center btn" onClick={cartClick}>
                            <FontAwesomeIcon icon={faCartPlus}/>
                            <p>Add to cart</p>
                        </div>
                        }
                        {loading === 2 &&
                        <div className="product-info-wishlist flex-center" onClick={cartClick}>
                            <div className="loading-icon"/>
                        </div>
                        }
                        {loading !== 2 &&
                        <div
                            className="product-info-wishlist flex-center" onClick={wishListClick}>
                            <FontAwesomeIcon icon={faHeart}/>
                        </div>
                        }
                    </div>
                    <div className="product-info-line"/>
                    <div className="product-info-cate flex">
                        <p>Category:</p>
                        <p>{product.productCate}</p>
                    </div>
                    <div className="product-info-line"/>
                </div>
            </div>
            <div className="product-info-line mobile-disable-line"/>
        </div>
    );
}

export default ProductBody;

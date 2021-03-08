import {withRouter} from "react-router";
import React, {useContext, useState} from "react";
import {CartContext} from "../../contexts/Cart";
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ORDER_SUCCESS_MESSAGE, showPrice} from "../../common";
import axios from "axios";
import {API_ORDERS} from "../../api.common";

const CheckoutBody = () => {
    const {cartItems, minusCount, plusCount, removeFromCart, updateCount, total, setCartItems, setTotal} = useContext(CartContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [shippingNote, setShippingNote] = useState('');
    // const [payment, setPayment] = useState('COD');
    const shippingFee = 30000;

    // Validation
    const [errorName, setErrorName] = useState(null);
    const [errorPhone, setErrorPhone] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorAddress, setErrorAddress] = useState(null);

    const validate = (name: string, phone: string, email: string, address: string): boolean => {
        resetValidationField();

        let message: any;
        let flag = true;

        if (name.trim().length === 0) {
            flag = false;
            message = 'Họ và tên không được để trống';
            setErrorName(message);
        }
        if (phone.trim().length === 0) {
            flag = false;
            message = 'Số điện thoại không được để trống';
            setErrorPhone(message);
        }
        if (email.trim().length === 0) {
            flag = false;
            message = 'Email không được để trống';
            setErrorEmail(message);
        }
        if (address.trim().length === 0) {
            flag = false;
            message = 'Địa chỉ không được để trống';
            setErrorAddress(message);
        }

        return flag;
    };

    const resetCart = () => {
        setCartItems([]);
        setTotal(0);
    }

    const resetValidationField = () => {
        setErrorName(null);
        setErrorPhone(null);
        setErrorEmail(null);
        setErrorAddress(null);
    }

    const resetField = () => {
        setName('');
        setPhone('');
        setEmail('');
        setAddress('');
        setNote('');
        setShippingNote('');
    }

    const handleSubmit = () => {
        const flag = validate(name, phone, email, address);

        flag && axios.post(`${API_ORDERS}`, {
            name, email, address, note, shippingNote,
            customerId: 1,
            phone: +phone,
            products: cartItems,
            totalPrice: total
        }).then(() => {
            alert(ORDER_SUCCESS_MESSAGE);
            localStorage.clear();
            resetCart();
            resetField();
        });
    };

    return (
        <section>
            <div className="pages_left">
                <form id="form_next_step">
                    <div className="pages_left_top"><label>Thông tin mua hàng</label></div>
                    <div className="left_top-infor">
                        <div className="row-infor">
                            <label>Họ và tên *</label>
                            <input name="_name" id="_cart_name" type="text" value={name}
                                   onChange={e => setName(e.target.value)} className={errorName ? 'error-input' : ''}
                                   placeholder="Họ và tên "/>
                            {errorName && <><br/><span className="validation">{errorName}</span></>}
                        </div>
                        <div className="row-infor">
                            <label>Số điện thoại *</label>
                            <input name="_phone" id="_cart_phone" type="number" value={phone}
                                   onChange={e => setPhone(e.target.value)} className={errorPhone ? 'error-input' : ''}
                                   placeholder="Nhập số diện thoại"/>
                            {errorPhone && <><br/><span className="validation">{errorPhone}</span></>}
                        </div>
                        <div className="row-infor">
                            <label>Email *</label>
                            <input name="_email" id="_cart_email" type="email" value={email}
                                   onChange={e => setEmail(e.target.value)} className={errorEmail ? 'error-input' : ''}
                                   placeholder="Nhập địa chỉ Email"/>
                            {errorEmail && <><br/><span className="validation">{errorEmail}</span></>}
                        </div>
                        <div className="row-infor">
                            <label>Địa chỉ *</label>
                            <input name="_address" id="_cart_address" type="text" value={address}
                                   onChange={e => setAddress(e.target.value)}
                                   className={errorAddress ? 'error-input' : ''}
                                   placeholder="Nhập địa chỉ đầy đủ: số nhà, tên đường"/>
                            {errorAddress && <><br/><span className="validation">{errorAddress}</span></>}
                        </div>
                        <div className="row-infor">
                            <label><p>Nội dung</p></label>
                            <textarea name="_note" itemType={'text'} value={note}
                                      onChange={e => setNote(e.target.value)}/>
                            <span className="text-error"/>
                        </div>
                    </div>
                    <div className="pages_left_top"><label>Chọn hình thức thanh toán</label></div>
                    <div className="left_top-infor">
                        <div className="delivery">
                            <div className="dl_checker">
                                <input id="_cart_payment_1" name="_cart_payment" type="radio" checked value="1"/>
                                <label htmlFor="_cart_payment_1">Giao hàng và thu tiền tại nhà</label>
                            </div>
                            <div className="dl_checker">
                                <input id="_cart_payment_3" name="_cart_payment" type="radio" value="3"/>
                                <label htmlFor="_cart_payment_3">Chuyển khoản qua máy ATM &amp; Ngân hàng</label>
                            </div>
                        </div>
                    </div>
                    <div className="pages_left_top"><label>VẬN CHUYỂN</label></div>
                    <div className="left_top-infor">
                        <div className="delivery" style={{width: 'calc(100% - 90px)'}}>
                            <div className="row-infor">
                                <textarea name="_note_ship" style={{width: '100%'}} rows={2}
                                          cols={20} itemType={'text'} placeholder="Ghi chú vận chuyển"
                                          value={shippingNote} onChange={e => setShippingNote(e.target.value)}>
                                </textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="pages_right">
                <div className="pages_left_top"><label>Đơn hàng</label></div>
                {
                    cartItems.length === 0 &&
                    <div className="right-top-infor _cart" style={{padding: '10px'}}>
                        No products in the cart.
                    </div>
                }
                {
                    cartItems.length > 0 &&
                    <div>
                        <div className="right-top-infor _cart">
                            <div id="thum_bx"/>
                            <table>
                                <tbody>
                                <tr className="infor_table_title">
                                    <td style={{
                                        width: '420px',
                                        textAlign: 'left',
                                        marginLeft: '10px',
                                        fontWeight: 'bold',
                                        color: '#008838'
                                    }}>
                                        Sản phẩm
                                    </td>
                                    <td style={{fontWeight: 'bold', color: '#008838'}}>Số lượng</td>
                                    <td style={{fontWeight: 'bold', color: '#008838'}}>Đơn giá</td>
                                </tr>
                                {
                                    cartItems.map((item: any, index: number) => {
                                        return (
                                            <tr className="infor_table cart-item2" key={index}>
                                                <td className="infor_product">
                                                    <a className="links" title="COMBO Heo Nga"
                                                       href="https://moclanfruit.com/thuc-pham/combo-heo-nga-441">
                                                        <figure>
                                                            <img
                                                                src="https://moclanfruit.com/files/product/combo-heo-nga-bc2v9g0z.gif"
                                                                alt="COMBO Heo Nga"/>
                                                        </figure>
                                                        <h3>{item.name}</h3>
                                                    </a>
                                                </td>
                                                <td>
                                                    <div className="choosenumber infor_number">
                                                        <div className="abate _number_reduce minus" id={item.id}
                                                             onClick={minusCount}/>
                                                        <input className="number _cart_number qty" itemType={'text'}
                                                               id={item.id} value={item.count} onChange={updateCount}/>
                                                        <div className="augment _number_increase plus" id={item.id}
                                                             onClick={plusCount}/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="infor_price ev_price">
                                                        <span className="_cart_price">
                                                            {showPrice(item.price)}
                                                        </span><sup>₫</sup>
                                                    </p>
                                                </td>
                                                <td style={{
                                                    width: '35px',
                                                    textAlign: 'center',
                                                    float: 'right',
                                                    marginTop: '26px'
                                                }}>
                                                    <div className="cart-product-delete" onClick={removeFromCart}
                                                         id={item.id}>
                                                        <FontAwesomeIcon style={{pointerEvents: 'none'}}
                                                                         icon={faTimes}/>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                                <tr className="infor_table" id="rs_ship">
                                    <td style={{float: 'right'}} className="sum_product">
                                        <h2>Phí ship :</h2>
                                        <span style={{float: 'right', paddingRight: '10px', marginTop: '10px'}}
                                              className="infor_sum">
                                            <span className="ev_ship">{showPrice(shippingFee)}</span><sup>₫</sup>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="infor_table">
                                    <td style={{float: 'right'}} className=" sum_product">
                                        <h2>Tổng tiền :</h2>
                                        <span style={{float: 'right', paddingRight: '10px', marginTop: '10px'}}
                                              className="infor_sum">
                                            <span
                                                className="ev_price_total">{showPrice(total + shippingFee)}<sup>₫</sup></span>
                                        </span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row-button-order">
                            <button id="submitCart" onClick={handleSubmit} className="_btn-order">Gửi đơn hàng</button>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
}

export default withRouter(CheckoutBody);

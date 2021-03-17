import Header from "../components/Layouts/Header";
import Breadcrumb from "../components/Layouts/Breadcrumb";
import Footer from "../components/Layouts/Footer";
import React from "react";

const ContactUs = () => {
    return (
        <div className="ContactUs">
            <Header activeContact={true}/>
            <Breadcrumb activeContact={true}/>

            <div className="bg_contact">
                <div className="title_cotact">
                    <label>Liên hệ với chúng tôi</label>
                    <span>Chúng tôi đã sẵn sàng phục vụ bạn</span>
                </div>
            </div>
            <div className="box_contact">
                <section>
                    <ul>
                        <li>
                            <aside><p style={{color: '#008838', fontSize: '1.3em'}}><strong>FRUIT SHOP</strong></p>
                                <p>
                                    <strong>Địa chỉ:</strong>
                                    123 - 456 đường 30/4 - P. Xuân Khánh - Q. Ninh Kiều - TP. Cần Thơ
                                </p>
                                <p><strong>Điện thoại:</strong> 0762 123 456 - 0123 456 789</p>
                                <p><strong>Email:</strong> cskh@fruitshop.com</p></aside>
                            <aside>
                                <p>
                                    <iframe frameBorder="0" title="Fruit Shop" style={{border: 0}}
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.92892723275!2d105.76941001428217!3d10.022723875393828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a088255c4bada3%3A0x4d87ebcfd64f9248!2zTeG7mWMgTGFuIEZydWl0IDMwLzQ!5e0!3m2!1svi!2s!4v1570720351236!5m2!1svi!2s"
                                    />
                                </p>
                            </aside>
                        </li>
                    </ul>
                </section>
            </div>

            <Footer/>
        </div>
    );
}

export default ContactUs;

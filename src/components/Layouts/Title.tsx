const Title = (props: any) => {
    return (
        <div className="div_title">
            <section>
                <div className="div_right">
                    <div itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                        <a href="/" itemProp="url" title="Trang chủ" className="active">Trang chủ</a>
                    </div>
                    <code> - </code>
                    <div itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                        <a href="san-pham.html" itemProp="url" title="Sản phẩm" className="active">Sản phẩm</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Title;

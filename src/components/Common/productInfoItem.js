import '../../Sass/component/productItem.sass';

const ProductInfoItem = ({ text ,linkText}) => {
    return (
        <div className="wrapper-layout">
            <div className="product-info-item">
                <h3>{text}<a href="#!">{linkText}</a></h3>
            </div>
        </div>

    )
}

export default ProductInfoItem;
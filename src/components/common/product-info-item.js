const ProductInfoItem = ({ textInfo }) => {
    return (
        <div className="wrapper-layout">
            <div className="product-info-item">
                <h3>{textInfo}<a href="#!">選購</a></h3>
            </div>
        </div>

    )
}

export default ProductInfoItem;
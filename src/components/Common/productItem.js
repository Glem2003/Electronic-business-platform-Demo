import '../../Sass/component/productItem.sass';

const ProductItem = ({ src, alt, text ,PS}) => {
    return (
        <div className='col-10'>
            <div className='item-image'>
                <img src={src} alt={alt}></img>
            </div>
            <div className='item-info'>
                <h3 className="text">{text}</h3>
                <h4 className="ps">{PS}</h4>
            </div>
        </div>
    )
}

export default ProductItem;
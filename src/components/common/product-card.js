import '../../sass/component/product-card.sass';

export const ProductCardWrapper = ({ children, src, alt }) => {
    return (
        <div className="product-card wrapper">
            <div>
                <img src={src} alt={alt} />
            </div>
            {children}
        </div>
    )
}

export const ProductCardCenter = ({ children, src, alt }) => {
    return (
        <div className="product-card center">
            <div className="card-image">
                <img src={src} alt={alt} />
            </div>
            {children}
        </div>
    )
}

export const CardInfo = ({ title, text, subtitle}) => {
    return (
        <div className="card-info">
            <h5>{title}</h5>
            <h6>{subtitle}</h6>
            <h4>{text}</h4>
        </div>
    )
}
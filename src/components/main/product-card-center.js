import ColorBox from "./color-box";

const ProductCardCenter = ({children,src,alt}) => {
    return (
        <div className="product-card center">
            <div className="card-image">
                <img src={src} alt={alt}/>
            </div>
            {children}
        </div>
    )
}

const CardInfo = ({ title, price, subtitle, cardInfoStyle, subtitleStyle, priceStyle }) => {
    return (
        <div style={cardInfoStyle} className="card-info">
            <h5 style={subtitleStyle}>{subtitle}</h5>
            <h6>{title}</h6>
            <h4 style={priceStyle}>{price}</h4>
        </div>
    )
}

export  {ProductCardCenter ,CardInfo};
import ColorBox from "./color-box";

const ProductCardCenter = ({children,src,alt}) => {
    return (
        <div className="product-card center">
            <div className="card-image">
                <img src={src} alt={alt}/>
            </div>
            <ColorBox colorItems={[
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
                { className: "black", style: "black" }
            ]}
            />
            {children}
        </div>
    )
}

const CardInfo = ({title,price,subtitle ,style}) => {
    return (
        <div style={style}className="card-info">
            <h5>{subtitle}</h5>
            <h6>{title}</h6>
            <h4>{price}</h4>
        </div>
    )
}

export  {ProductCardCenter ,CardInfo};
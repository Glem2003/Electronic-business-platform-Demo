const ProductCardWrapper = ({children,src,alt}) =>{
    return(
        <div className="product-card wrapper">
            <div>
                <img src={src} alt={alt}/>
            </div>
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

export { ProductCardWrapper, CardInfo };
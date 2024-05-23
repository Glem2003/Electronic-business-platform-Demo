import '../../Sass/component/productCard.sass';

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

export const CardInfo = ({ title, text, subtitle, ps }) => {
    return (
        <div className="card-info">
            <h6 className='postscript'>{ps}</h6>
            <h5 className='title'>{title}</h5>
            <h6 className='subtitle'>{subtitle}</h6>
            <h4 className='text'>{text}</h4>
        </div>
    )
}
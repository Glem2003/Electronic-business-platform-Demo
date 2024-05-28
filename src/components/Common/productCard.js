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
            {ps && <h6 className='postscript'>{ps}</h6>}
            {title && <h5 className='title'>{title}</h5>}
            {subtitle && <h6 className='subtitle'>{subtitle}</h6>}
            {text && <h4 className='text'>{text}</h4>}
        </div>
    )
}
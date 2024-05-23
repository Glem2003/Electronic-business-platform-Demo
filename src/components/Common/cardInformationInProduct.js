const CardInformationInProduct = ({ src, alt, text }) => {
    return (
        <div className="card-images">
            <div className="img-box">
                <img src={src} alt={alt} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default CardInformationInProduct;
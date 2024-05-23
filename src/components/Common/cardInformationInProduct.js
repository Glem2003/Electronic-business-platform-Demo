const CardInformationInProduct = ({ src, alt, text }) => {
    return (
        <div className="cardImage">
            <img src={src} alt={alt} />
            <p>{text}</p>
        </div>
    )
}

export default CardInformationInProduct;
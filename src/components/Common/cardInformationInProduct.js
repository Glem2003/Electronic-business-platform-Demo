const CardInformationInProduct = ({ src, alt, text, src_2, alt_2 }) => {
    return (
        <>
            {src ? (
                <div className="card-images">
                    <div className="img-box">
                        <img src={`${process.env.PUBLIC_URL}${src}`} alt={alt} />
                        {src_2 && <img src={`${process.env.PUBLIC_URL}${src_2}`} alt={alt_2} />}
                    </div>
                    <p>{text}</p>
                </div>
            ) : (
                <div className="card-images" style={{ justifyContent: 'center' }}>
                    <p>{text}</p>
                </div>
            )}
        </>
    );
}

export default CardInformationInProduct;
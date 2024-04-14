function SectionItem ({ name, title, price , src ,alt}) {
    return(
        <div className="item-col">
            <div className="col-info">
                <h6 className="name">{name}</h6>
                <h2 className="title">{title}</h2>
                <h5 className="price">{price}</h5>
            </div>
            <div className="col-wrapper">
                <img src={src} alt={alt}></img>
            </div>
        </div>
    )
}

export default SectionItem;
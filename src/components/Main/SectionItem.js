function SectionItem ({ name, title, price , src ,alt ,titleColor}) {
    return(
        <div className="item-col">
            <div className="col-info" style={{ color: titleColor ? "white" : "black" }}>
                <h6 style={{ color: titleColor ? "white" : "gray" }} className="name">{name}</h6>
                <h2 className="title">{title}</h2>
                <h5 style={{ color: titleColor ? "white" : "gray" }} className="price">{price}</h5>
            </div>
            <div className="col-wrapper">
                <img src={src} alt={alt}></img>
            </div>
        </div>
    )
}

export default SectionItem;

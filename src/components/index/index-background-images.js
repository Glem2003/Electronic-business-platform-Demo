const IndexBackgroundImages = ({ title, subtitle, backgroundImage, color, width }) => {
    return (
        <div className="index-images"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                width: `${width || "100vw"}`
            }}>

            <h1 style={{ color: `${color}` }}>{title}</h1>
            <h2 style={{ color: `${color}` }}>{subtitle}</h2>
            <div className="button-item">
                <h4 className="btn more">進一步了解</h4>
                <h4 className="btn buy">購買</h4>
            </div>
            
        </div >
    )
}

export default IndexBackgroundImages;
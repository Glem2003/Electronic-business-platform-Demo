const HomeBackgroundImages = ({ title, subtitle, backgroundImage, color}) => {
    return (
        <div className="index-images"
            style={{
                backgroundImage: `url(${backgroundImage})`
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

export default HomeBackgroundImages;
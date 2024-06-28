const HeaderBanner = ({ title, text, link }) => {
    return (
        <div className="banner">
            <div className="info">
                <h2>{title}</h2>
                <h3>{text}</h3>
                <h6>{link}</h6>
            </div>
            <div className="picture"></div>
        </div>
    )
}

export default HeaderBanner;
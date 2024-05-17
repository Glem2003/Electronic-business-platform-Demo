const HomeBackgroundImages = ({ title, subtitle, className }) => {
    return (
        <div className={className}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className="button-item">
                <h4 className="btn more">進一步了解</h4>
                <h4 className="btn buy">購買</h4>
            </div>
        </div>
    )
}

export default HomeBackgroundImages;
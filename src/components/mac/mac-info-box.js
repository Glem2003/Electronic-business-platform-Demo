const MacInfoBox = ({ title, text, linkText_1, linkText_2 }) => {
    return (
        <div className="section3-info">
            <div className="info">
                <h2>{title}</h2>
                <h4>{text}</h4>
                <h5>{linkText_1}</h5>
                <h5>{linkText_2}</h5>
            </div>
        </div>
    )
}

export default MacInfoBox;
const ContantTitle = ({ title, subtitle }) => {
    return (
        <div className="title">
            <p>
                {title}
                <span>{subtitle}</span>
            </p>
        </div>
    )
}

export default ContantTitle;
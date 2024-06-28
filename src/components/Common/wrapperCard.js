const WrapperCard = ({ title, subtitle, className, children }) => {
    return (
        <div className={className}>
            <div className="text-info">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            {children}
        </div>
    )
}

export default WrapperCard;
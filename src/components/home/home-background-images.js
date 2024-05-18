const HomeBackgroundImages = ({ title, subtitle, className, children }) => {
    return (
        <div className={className}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {children}
        </div>
    )
}

export default HomeBackgroundImages;
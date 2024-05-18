const SectionTitle = ({ title, subtitle }) => {
    return (
        <>
            <div className="title">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
            <div className="video"></div>
        </>
    )
}

export default SectionTitle;
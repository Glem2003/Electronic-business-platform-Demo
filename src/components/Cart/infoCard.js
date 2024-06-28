const InfoCard = ({ title, text, link }) => {
    return (
        <div className='info'>
            <h1>{title}</h1>
            <h4>{text}</h4>
            <h3 className='link'>{link}</h3>
        </div>
    )
}

export default InfoCard;
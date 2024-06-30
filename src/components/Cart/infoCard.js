const InfoCard = ({ title, text, link, direction, btnClick, disabled }) => {

    const infoClass = (direction === 'center') ? 'info--center' : '';
    const linkClass = (direction === 'center') ? 'link--bill' : '';

    return (
        <div className={`info ${infoClass}`}>
            <h1>{title}</h1>
            <h4>{text}</h4>
            <button className={`link ${linkClass}`} onClick={btnClick} disabled={disabled}>{link}</button>
        </div>
    )
}

export default InfoCard;
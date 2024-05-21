const ContantTitle = ({title , subtitle ,style}) => {
    return (
        <div className="title" style={style}>
            <p>
                {title}
                <span style={{ color: 'grey' }}>{subtitle}</span>
            </p>
        </div>
    )
}

export default ContantTitle;
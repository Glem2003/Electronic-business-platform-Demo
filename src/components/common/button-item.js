const ButtonItem = ({ props }) => {
    return (
        <div className="button-item">
            {props.map((text) => {
                return (
                    <h4 className="btn">{text}</h4>
                )
            })}
        </div>
    )
}

export default ButtonItem;
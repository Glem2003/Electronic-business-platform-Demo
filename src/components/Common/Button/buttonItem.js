import '../../../Sass/component/click-button.sass';

export const ButtonItem = ({ props }) => {
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

export const ClickButton = ({ text }) => {
    return (
        <>
            <h4 className="click-button">{text}</h4>
        </>
    )
}

export const ClickedButton = ({ text }) => {
    return (
        <>
            <h4 className="clicked-button">{text}</h4>
        </>
    )
}

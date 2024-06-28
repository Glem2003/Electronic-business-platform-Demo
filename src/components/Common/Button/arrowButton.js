//import sass
import '../../../Sass/component/arrow-button.sass';

export const ArrowButton = ({ className, style, onClick }) => {
    return (
        <div className={className}
            onClick={onClick}
            style={{ ...style, display: "block" }}
        >
            <img src={`${process.env.PUBLIC_URL}/images/common/arrow.png`} alt="button" />
        </div>
    );
};

export const NextArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <img src={`${process.env.PUBLIC_URL}/images/common/arrow.png`} alt="button" />
        </div>
    );
}

export const PrevArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <img src={`${process.env.PUBLIC_URL}/images/common/arrow.png`} alt="button" />
        </div>
    );
}

export const ArrowIcon = ({ onClick, isOpen }) => {
    return (
        <div className={`arrow-icon ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <span className="left-bar"></span>
            <span className="right-bar"></span>
        </div>
    );
};
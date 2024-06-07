export const ArrowButton = ({ className, style, onClick }) => {
    return (
        <div className={className}
            onClick={onClick}
            style={{ ...style, display: "block" }}
        >
            <img src="/images/arrow.png" alt="button" />
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
            <img src="/images/arrow.png" alt="button" />
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
            <img src="/images/arrow.png" alt="button"/>
        </div>
    );
}
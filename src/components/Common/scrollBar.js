import React, { useState, useRef } from 'react';
import { ArrowButton } from './Button/arrowButton';

// import sass
import '../../Sass/component/scrollBar.sass';

const ScrollBar = React.forwardRef(({ children }) => {

    const ITEM_WIDTH = 400;

    const [scrollPosition, setScrollPosition] = useState(0);

    const containerRef = useRef();

    // Function to handle scrolling when the button is clicked
    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;
        setScrollPosition(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    }

    return (
        <div className="section">

            <div className="scrollbar" ref={containerRef}>
                {children}
            </div>

            <div
                className="action-btns"
            >
                <button
                    className="left-button"
                    onClick={() => handleScroll(-ITEM_WIDTH)}
                >
                    <ArrowButton/>
                </button>

                <button
                    className="right-button"
                    onClick={() => handleScroll(ITEM_WIDTH)}
                >
                    <ArrowButton />
                </button>

            </div>
        </div>
    )
});

export default ScrollBar;
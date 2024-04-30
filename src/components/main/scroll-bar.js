import React, { useState, useRef } from 'react';

const ScrollBar = React.forwardRef(({ children }) => {

    const ITEM_WIDTH = 500;

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const containerRef = useRef();

    // Function to handle scrolling when the button is clicked
    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;
        setScrollPosition(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    }

    // Function to handle when the mouse is enter
    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div className="section">

            <div className="scrollbar" ref={containerRef}>
                {children}
            </div>

            <div
                className="action-btns"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    className="left-button"
                    onClick={() => handleScroll(-ITEM_WIDTH)}
                >
                    L
                </button>

                <button
                    className="right-button"
                    onClick={() => handleScroll(ITEM_WIDTH)}
                >
                    R
                </button>

            </div>
        </div>
    )
});

export default ScrollBar;
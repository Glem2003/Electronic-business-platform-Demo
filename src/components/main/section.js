import React, { useState, useRef } from 'react';

const Section = React.forwardRef(({ children }, ref) => {

    const ITEM_WIDTH = 500;

    const [scrollPosition, setscrollPosition] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const containerRef = useRef();

    // Function to handle scrolling when the button is clicked
    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;
        setscrollPosition(newScrollPosition);
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
        <div className="section" ref={ref}>

            <div className="scrollbar">
                <div className="scroll" ref={containerRef}>
                    {children}
                </div>
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

export default Section;
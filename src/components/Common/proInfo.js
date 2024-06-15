import React, { useState } from 'react';

// sass
import '../../Sass/component/productInformation.sass';

// component
import { ArrowIcon } from './Button/arrowButton';


export const ProductInformation = ({ textData }) => {

    const [isActive, setActive] = useState('item1');

    const handleClick = (index) => {
        setActive(`item${index + 1}`);
    }

    return (
        <div className='productInformation'>
            <div className="container">
                <div className="info-text">
                    {textData && textData.map((info, index) => {
                        const isOpen = isActive === `item${index + 1}`;
                        const itemClass = `item item${index + 1} ${isOpen ? 'open' : ''}`;
                        return (
                            <div
                                key={index}
                                className={itemClass}
                                onClick={() => handleClick(index)}
                            >
                                <div className={`title title${index + 1}`}>
                                    {info.title}
                                    <ArrowIcon key={index} isOpen={isOpen} />
                                </div>
                                <div className="text">{info.text}</div>
                            </div>
                        );
                    })}
                </div>
                <div className="larger-image">
                    {textData && textData.map((info, index) => {
                        const backgroundImageClass = `background-image ${isActive === `item${index + 1}` ? 'active' : ''}`;
                        return (
                            <div
                                key={index}
                                className={backgroundImageClass}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

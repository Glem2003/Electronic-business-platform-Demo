import React from 'react';

const FooterMore = ({props}) =>{
    return (
        <div className="footer-more">
            <h6>
                {props.map((item, index) => (
                    typeof item === 'string' ? (
                        item
                    ) : (
                        <a href="#!" key={index}>{item.text}</a>
                    )
                ))}
            </h6>
        </div>
    );
}

export default FooterMore;
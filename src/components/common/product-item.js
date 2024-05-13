import React from 'react';

const ProductItem = ({ src, alt, text ,PS}) => {
    return (
        <div className='col-10'>
            <div className='item-image'>
                <img src={src} alt={alt}></img>
            </div>
            <div className='item-info'>
                <h3>{text}</h3>
                <h4 style={{color: "red"}}>{PS}</h4>
            </div>
        </div>
    )
}

export default ProductItem;
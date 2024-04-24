import React from 'react';

function ProductItem({ src, alt, text}){
    return(
        <div className='col-10'>
            <div className='item-image'>
                <img src={src} alt={alt}></img>
            </div>
            <div className='item-info'>{text}</div>
        </div>
    )
}

export default ProductItem;
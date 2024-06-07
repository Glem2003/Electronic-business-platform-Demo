import React from 'react';

//component
import ShopItemCard from './shopItemCard.js';

export const renderTitle = (items, itemType) => {
    return items.map((item) => (
        item.product_items && item.product_items.map((productItem) => (
            productItem[itemType] && productItem[itemType].map((info) => (
                <React.Fragment key={info.title}>
                    <h1>{info.title}</h1>
                    {info.subtitle && (
                        <h4>{info.subtitle}</h4>
                    )}
                </React.Fragment>
            ))
        ))
    ));
};

export const renderContent = (items, itemType) => {
    return items.map((item) => (
        item.product_items && item.product_items.map((productItem) => (
            productItem[itemType] && productItem[itemType].map((info) => (
                info.product_item && info.product_item.map((item, index) => (
                    <ShopItemCard
                        key={index}
                        src={item.src}
                        colors={item.color}
                        ps={item.postscript}
                        title={item.title}
                        price={item.price}
                    />
                ))
            ))
        ))
    ));
};
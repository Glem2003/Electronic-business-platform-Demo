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

export const renderMenuItems = (menuItems, prefix) => {
    return menuItems.map((menuItem, menuIdx) => (
        menuItem && menuItem.list.map((listItem, listIdx) => (
            <div className="box" key={`${prefix}-${menuIdx}-${listIdx}`}>
                <div className="img">
                    <img src={listItem.src} alt=''/>
                </div>
                <h4>{listItem.text}</h4>
            </div>
        ))
    ));
};

export const renderMoreListItems = (moreListItems, prefix) => {
    return moreListItems.map((listItem, listIdx) => {
        const itemFront = listItem.slice(0, 5);
        const itemBack = listItem.slice(5, 10);
        const itemOther = listItem.slice(10, 11);

        return (
            <React.Fragment key={`${prefix}-more-${listIdx}`}>
                <div className='list'>
                    {itemFront && itemFront.map((item, frontIdx) => (
                        <div className="box" key={`${prefix}-front-${listIdx}-${frontIdx}`}>
                            <div className="img">
                                <img src={item.src} alt=''/>
                            </div>
                            <h4>{item.text}</h4>
                        </div>
                    ))}
                </div>
                <div className='list'>
                    {itemBack && itemBack.map((item, backIdx) => (
                        <div className="box" key={`${prefix}-back-${listIdx}-${backIdx}`}>
                            <div className="img">
                                <img src={item.src} alt=''/>
                            </div>
                            <h4>{item.text}</h4>
                        </div>
                    ))}
                </div>
                <div className='list'>
                    {itemOther && itemOther.map((item, backIdx) => (
                        <div className="box" key={`${prefix}-back-${listIdx}-${backIdx}`}>
                            <div className="img">
                                <img src={item.src} alt=''/>
                            </div>
                            <h4>{item.text}</h4>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    });
};
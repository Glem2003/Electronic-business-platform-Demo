import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../reducer/shopSlice';

//component
import ShopItemCard from './shopItemCard.js';

export const RenderTitle = (items, itemType) => {
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

export const RenderContent = (items, itemType) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        const filteredItem = {
            price: item.price,
            name: item.title,
            id: item.key,
            src: item.src,
            quantity: 1
        };
        dispatch(addItem(filteredItem));
        //console.log(item);
    };

    return items.map((item) => (
        item.product_items && item.product_items.map((productItem) => (
            productItem[itemType] && productItem[itemType].map((info) => (
                info.product_item && info.product_item.map((item) => (
                    <div onClick={() => handleAddItem(item)} key={item.key}>
                        <ShopItemCard
                            src={`${process.env.PUBLIC_URL}${item.src}`}
                            colors={item.color}
                            ps={item.postscript}
                            title={item.title}
                            price={`NT$ ${item.price.toLocaleString('en-US')}`}
                        />
                    </div>
                ))
            ))
        ))
    ));
};

export const RenderMenuItems = (menuItems, prefix) => {
    return menuItems.map((menuItem, menuIdx) => (
        menuItem && menuItem.list.map((listItem, listIdx) => (
            <div className="box" key={`${prefix}-${menuIdx}-${listIdx}`}>
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}${listItem.src}`} alt='' />
                </div>
                <h4>{listItem.text}</h4>
            </div>
        ))
    ));
};

export const RenderMoreListItems = (moreListItems, prefix) => {
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
                                <img src={`${process.env.PUBLIC_URL}${item.src}`} alt='' />
                            </div>
                            <h4>{item.text}</h4>
                        </div>
                    ))}
                </div>
                <div className='list'>
                    {itemBack && itemBack.map((item, backIdx) => (
                        <div className="box" key={`${prefix}-back-${listIdx}-${backIdx}`}>
                            <div className="img">
                                <img src={`${process.env.PUBLIC_URL}${item.src}`} alt='' />
                            </div>
                            <h4>{item.text}</h4>
                        </div>
                    ))}
                </div>
                <div className='list'>
                    {itemOther && itemOther.map((item, backIdx) => (
                        <div className="box" key={`${prefix}-back-${listIdx}-${backIdx}`}>
                            <div className="img">
                                <img src={`${process.env.PUBLIC_URL}${item.src}`} alt='' />
                            </div>
                            <h4>{item.text}</h4>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    });
};
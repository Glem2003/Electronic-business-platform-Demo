import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../reducer/shopSlice.js';

//import data
import { cart } from '../../Content/index.js';

//component
import InfoCard from './infoCard.js';
import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';

// import sass
import '../../Sass/cartPages.sass';

const Cart = () => {

    const dispatch = useDispatch();
    const value = useSelector(state => state.shop.value);

    const handleAddItem = () => {
        dispatch(addItem());
    };
    const handleRemoveItem = () => {
        (value > 0) && dispatch(removeItem());
    };

    // Convert question_info to the data format of the Collapse component
    const itemsNest = cart[0].question_info[0].list.map((item, index) => ({
        key: index.toString(),
        label: (<h2>{item.title}</h2>),
        children: (
            <div className='info'>
                {typeof item.text === 'object' && React.isValidElement(item.text) ? (
                    <p>{item.text}<span className="link">{item.link}</span></p> // data is JSX
                ) : Array.isArray(item.text) && item.text.every(t => typeof t === 'string') && item.list ? (
                    <div>
                        {item.text[0]}
                        {item.list && Array.isArray(item.list) && (
                            <ul>
                                {item.list.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem}</li>
                                ))}
                            </ul>
                        )}
                        {item.text[1]}<span className="link">{item.link}</span>{item.text[2]}
                    </div> // data is string[]
                ) : Array.isArray(item.text) && item.text.every(t => typeof t === 'string') ? (
                    <div>
                        {item.text[0]}<span className="link">{item.link}</span>{item.text[1]}
                    </div>
                ) : (
                    <p>{item.text}<span className="link">{item.link}</span></p> // other data
                )}
            </div>
        )
    }));

    // take items title data
    const itemsTitle = cart[0].question_info[0].title;
    const items = [
        {
            key: '1',
            label: (<h1>{itemsTitle}</h1>),
            children: (
                <>
                    <Collapse
                        expandIconPosition={'right'}
                        items={itemsNest}
                        size={'middle'}
                        expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 270 : 90} />}
                        bordered={false}
                    />
                </>
            ),
        },
    ];

    return (
        <div className="cart">

            <div className="section section1">
                <div className='devTool' style={{ opacity: '0.3' }}>
                    <h2>devTool</h2>
                    <button onClick={handleAddItem}>ADD_ITEM</button>
                    <button onClick={handleRemoveItem}>REMOVE_ITEM</button>
                </div>
                {cart && cart.map((item) => (
                    item.header_info.map((info, index) => (
                        <InfoCard
                            key={index}
                            title={info.title}
                            text={info.text}
                            link={info.link}
                        />
                    ))
                ))}
            </div>

            <div className='section about'>
                {cart && cart.map((item) => (
                    item.about_info.map((info) => (
                        <h4>{info.text}</h4>
                    ))
                ))}
            </div>

            <div className="section section2">
                <div className='container'>
                    {cart && cart.map((item) => (
                        item.shop_info.map((info, index) => (
                            <InfoCard
                                key={index}
                                title={info.title}
                                text={info.text}
                                link={info.link}
                            />
                        ))
                    ))}
                </div>
            </div>

            <div className='section section3'>
                <Collapse
                    expandIconPosition={'right'}
                    items={items}
                    size={'large'}
                    expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 270 : 90} />}
                    bordered={false}
                />
            </div>

        </div>
    )
}

export default Cart;
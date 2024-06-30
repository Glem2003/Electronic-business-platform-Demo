import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, addCoupon, removeCoupon } from '../../reducer/shopSlice';

//import data
import { cart } from '../../Content/index.js';

//component
import InfoCard from './infoCard.js';
import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import CartSystem from './cartSystem.js';
import BillCard from './billCard.js';

// import sass
import '../../Sass/cartPages.sass';

const Cart = () => {
    // Convert question_info to the data format of the Collapse component
    const itemsNest = cart[0].question_info[0].list.map((item, index) => ({
        key: index.toString(),
        label: (<h2>{item.title}</h2>),
        children: (
            <div className='info'>
                {typeof item.text === 'object' && React.isValidElement(item.text) ? (
                    <p>{item.text}<span className="link">{item.link}</span></p>
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
                    </div>
                ) : Array.isArray(item.text) && item.text.every(t => typeof t === 'string') ? (
                    <div>
                        {item.text[0]}<span className="link">{item.link}</span>{item.text[1]}
                    </div>
                ) : (
                    <p>{item.text}<span className="link">{item.link}</span></p>
                )}
            </div>
        )
    }));

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

    const productItems = useSelector((state) => state.shop.items);
    const totalPrice = useSelector((state) => state.shop.totalPrice);
    const coupon = useSelector((state) => state.shop.coupon);

    const dispatch = useDispatch();

    const isCoupon = '0630';
    const [couponCode, setCouponCode] = useState('0630');

    const applyCoupon = () => {
        if (couponCode === isCoupon) {
            dispatch(addCoupon({ code: couponCode, discount: 0.2 }));
        } else {
            alert('優惠碼無效');
        }
    };

    const removeAppliedCoupon = () => {
        dispatch(removeCoupon());
        setCouponCode('');
    };

    const handleCheckout = () => {
        const confirmed = window.confirm('你確定要繼續嗎？');
        if (confirmed) {
            alert('已完成結帳，謝謝您的購買！ 金額總共： $' + totalPrice.toLocaleString('en-US'));
            dispatch(clearCart());
        }
    };

    const hasProduct = productItems.length > 0;

    return (
        <div className="cart">
            <div className="section section1">

                {!hasProduct ? (
                    <InfoCard
                        title={'購物袋中沒有任何商品。'}
                        text={'所有訂單均享免額外付費運送服務。'}
                        link={'繼續選購'}
                    />
                ) : (
                    <>
                        <InfoCard
                            title={`以下是你購物袋內的商品 NT$ ${totalPrice.toLocaleString('en-US')}`}
                            text={'所有訂單均享免額外付費運送服務。'}
                            link={'結帳'}
                            direction={'center'}
                            btnClick={handleCheckout}
                            disabled={totalPrice === 0}
                        />
                        <CartSystem>
                            <BillCard
                                total={productItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                                discount={coupon ? coupon.discount : ''}
                                billBtnClick={handleCheckout}
                                coupon={coupon}
                                applyBtn={applyCoupon}
                                removeBtn={removeAppliedCoupon}
                                couponCode={couponCode}
                                couponChange={(e) => setCouponCode(e.target.value)}
                                couponDisabled={productItems.length === 0}
                            />
                        </CartSystem>
                    </>
                )}

            </div>

            <div className='section about'>
                {cart.map((item) => (
                    item.about_info.map((info, index) => (
                        <h4 key={index}>{info.text}</h4>
                    ))
                ))}
            </div>

            <div className="section section2">
                <div className='container'>
                    {cart.map((item) => (
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

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addItem,
    removeItem,
    updateQuantity,
} from '../../reducer/shopSlice';

//component
import CartProduct from './cartProduct';

const CartSystem = ({ children }) => {
    const items = useSelector((state) => state.shop.items) || [];
    const coupon = useSelector((state) => state.shop.coupon);
    const dispatch = useDispatch();

    const [couponCode, setCouponCode] = useState('');

    const totalPriceWithoutDiscount = items.reduce((total, item) => total + item.quantity * item.price, 0);
    let totalPrice = totalPriceWithoutDiscount;

    if (coupon) {
        totalPrice = totalPriceWithoutDiscount * (1 - coupon.discount);
    }

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    return (
        <>
            <div className='cartSystem'>
                <ul>
                    {items.map((item, index) => (
                        <CartProduct
                            key={index}
                            price={item.quantity * item.price}
                            quantity={item.quantity}
                            name={item.name}
                            img={item.src}
                            handleAdd={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            handleRemove={() => {
                                handleUpdateQuantity(item.id, item.quantity - 1)
                                if (item.quantity === 1) {
                                    handleRemoveItem(item.id)
                                }
                            }}
                            isDisabled={coupon !== null}
                        />
                    ))}
                </ul>
            </div>
            {children}
        </>
    );
};

export default CartSystem;

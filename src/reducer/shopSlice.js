import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    coupon: null
};

const calculateDiscountedTotalPrice = (totalPrice, discount) => {
    return discount ? totalPrice * (1 - discount) : totalPrice;
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,

    reducers: {

        // 新增商品到購物車
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;  // 若商品已存在，增加其數量
            } else {
                state.items.push({ ...item, quantity: item.quantity });  // 否則將商品加入購物車
            }
            state.totalPrice += item.price * item.quantity;
            state.totalQuantity += item.quantity;
            state.totalPrice = calculateDiscountedTotalPrice(state.totalPrice, state.coupon?.discount);
        },

        // 從購物車移除商品
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            const removedItem = state.items.find((item) => item.id === itemIdToRemove);
            if (removedItem) {
                state.items = state.items.filter((item) => item.id !== itemIdToRemove);
                state.totalQuantity -= removedItem.quantity; // 減去移除商品的數量
                state.totalPrice -= removedItem.price * removedItem.quantity; // 減去移除商品的價格
                state.totalPrice = calculateDiscountedTotalPrice(state.totalPrice, state.coupon?.discount);
            }
        },

        // 更新商品數量
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item) {
                state.totalQuantity = state.totalQuantity - item.quantity + quantity; // 減去舊數量再加上新數量
                state.totalPrice = state.totalPrice - item.price * item.quantity + item.price * quantity; // 更新總價格
                item.quantity = quantity; // 更新指定商品的數量
                state.totalPrice = calculateDiscountedTotalPrice(state.totalPrice, state.coupon?.discount);
            }
        },

        // 添加優惠卷
        addCoupon: (state, action) => {
            state.coupon = action.payload;
            state.totalPrice = calculateDiscountedTotalPrice(state.totalPrice, state.coupon?.discount);
        },

        // 移除優惠卷
        removeCoupon: (state) => {
            state.coupon = null;
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },

        clearCart: () => initialState,
    },
});

export const { addItem, removeItem, updateQuantity, addCoupon, removeCoupon, clearCart } = shopSlice.actions;
export default shopSlice.reducer;
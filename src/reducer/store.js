import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.warn(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const clearLocalStorage = () => {
  try {
    localStorage.removeItem('state'); 
  } catch (e) {
    console.warn('清除 Local Storage 出錯:', e);
  }
};

//clearLocalStorage();

const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
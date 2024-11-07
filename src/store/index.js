import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { dataSlice } from '@/redux';

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
    },
});

export const AppDispatch = store.dispatch;
export const RootState = store.getState;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
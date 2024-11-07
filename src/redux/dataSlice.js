import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const modulePrefix = 'fetch';


const initialState = {
    data: null,
    loading: true,
    error: null,
};

export const dataSlice = createSlice({
    name: 'dataSlice',
    initialState: initialState,
    reducers: {},
});
import { configureStore } from '@reduxjs/toolkit';
import confirmSlice from './reducers/confirmSlice';
import regSlice from "./reducers/regSlice"
import userHistorySlice from './reducers/userHistorySlice';
import userTransferSlice from './reducers/userTransferSlice';

const store = configureStore({
    reducer: {
        regSlice : regSlice,
        userTransferSlice : userTransferSlice,
        confirmSlice : confirmSlice,
        userHistorySlice : userHistorySlice
    }
    
})

export default store;
// import { configureStore } from '@reduxjs/toolkit';
// import confirmSlice from './reducers/confirmSlice';
// import regSlice from "./reducers/regSlice"
// import userHistorySlice from './reducers/userHistorySlice';
// import userTransferSlice from './reducers/userTransferSlice';
// import isLoadingSlice from './reducers/isLoadingSlice';

// const store = configureStore({
//     reducer: {
//         regSlice : regSlice,
//         userTransferSlice : userTransferSlice,
//         confirmSlice : confirmSlice,
//         userHistorySlice : userHistorySlice,
//         isLoadingSlice : isLoadingSlice
//     }
    
// })

// export default store;

import { configureStore } from "@reduxjs/toolkit";
// import regSlice from "./reducers/regSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers/reducers";


const persistConfig = {
  key: "Fazzpay",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer:  persistedReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export const persistedStore = persistStore(store);
export default store;
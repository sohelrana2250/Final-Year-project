import { configureStore } from '@reduxjs/toolkit';
import { apiCategoriSlice } from '../features/api/apiCategoriSlice';
import { apiDevicesSlice } from '../features/api/apiDevicesSlice';
import { apiSlice } from '../features/api/apiSlice';
import authSlice from './../features/auth/authSlice';

const store = configureStore({

    reducer: {

        [apiSlice.reducerPath]: apiSlice.reducer,
        [apiCategoriSlice.reducerPath]: apiCategoriSlice.reducer,
        [apiDevicesSlice.reducerPath]: apiDevicesSlice.reducer,
        auth: authSlice,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware, apiCategoriSlice.middleware, apiDevicesSlice.middleware),
});
export default store;

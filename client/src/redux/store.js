import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { useReducer } from 'react';
import userReducer from './user/userSlice';
import {persistReducer, persistStore} from 'redux-persist';
import storage from'redux-persist/lib/storage';
import { version } from 'mongoose';

const rootReducer=combineReducers({user:userReducer})

const persistConfig={
  key:'root',
  storage,
  version:1,
}

const persistedReducer=persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false,
    }),
     devTools: process.env.NODE_ENV !== 'production',
});

export const persistor=persistStore(store);
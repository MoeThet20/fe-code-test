import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import { thunk } from 'redux-thunk';
import creditCardSlice from './slices/creditCardSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
    creditCard: creditCardSlice
});
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['creditCard']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: false
        }).concat(thunk)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

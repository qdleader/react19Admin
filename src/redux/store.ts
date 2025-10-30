/**
 * Redux Store 配置
 */

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import appReducer from './slices/appSlice';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: import.meta.env.DEV,
});

// 导出类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

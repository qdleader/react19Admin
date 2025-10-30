/**
 * 应用全局状态管理切片
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  collapsed: boolean; // 侧边栏折叠状态
  theme: 'light' | 'dark'; // 主题
  loading: boolean; // 全局loading
  locale: 'zh-CN' | 'en-US'; // 语言
}

const initialState: AppState = {
  collapsed: false,
  theme: 'light',
  loading: false,
  locale: 'zh-CN',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // 切换侧边栏折叠状态
    toggleCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
    // 设置侧边栏折叠状态
    setCollapsed: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload;
    },
    // 切换主题
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    // 设置主题
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    // 设置全局loading
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    // 设置语言
    setLocale: (state, action: PayloadAction<'zh-CN' | 'en-US'>) => {
      state.locale = action.payload;
    },
  },
});

export const { toggleCollapsed, setCollapsed, toggleTheme, setTheme, setLoading, setLocale } =
  appSlice.actions;

export default appSlice.reducer;

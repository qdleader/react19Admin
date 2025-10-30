/**
 * 用户状态管理切片
 */

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { UserInfo, LoginParams } from '@/types';
import { mockLogin, mockGetUserInfo } from '@/api/mock';
import { storage } from '@/utils';

interface UserState {
  token: string | null;
  userInfo: UserInfo | null;
  loading: boolean;
  isLogin: boolean;
}

const initialState: UserState = {
  token: storage.get<string>('token') || null,
  userInfo: storage.get<UserInfo>('userInfo') || null,
  loading: false,
  isLogin: !!storage.get<string>('token'),
};

/**
 * 异步登录
 */
export const loginAsync = createAsyncThunk(
  'user/login',
  async (params: LoginParams, { rejectWithValue }) => {
    try {
      const response = await mockLogin(params.username, params.password);
      if (response.success) {
        // 保存 token 和用户信息到本地存储
        storage.set('token', response.data.token);
        storage.set('userInfo', response.data.userInfo);
        return response.data;
      }
      return rejectWithValue(response.message);
    } catch (error: any) {
      return rejectWithValue(error.message || '登录失败');
    }
  }
);

/**
 * 异步获取用户信息
 */
export const getUserInfoAsync = createAsyncThunk(
  'user/getUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await mockGetUserInfo();
      if (response.success) {
        storage.set('userInfo', response.data);
        return response.data;
      }
      return rejectWithValue(response.message);
    } catch (error: any) {
      return rejectWithValue(error.message || '获取用户信息失败');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 设置 token
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLogin = !!action.payload;
      storage.set('token', action.payload);
    },
    // 设置用户信息
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      storage.set('userInfo', action.payload);
    },
    // 退出登录
    logout: (state) => {
      state.token = null;
      state.userInfo = null;
      state.isLogin = false;
      storage.remove('token');
      storage.remove('userInfo');
    },
  },
  extraReducers: (builder) => {
    // 登录
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.userInfo = action.payload.userInfo;
        state.isLogin = true;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loading = false;
      });

    // 获取用户信息
    builder
      .addCase(getUserInfoAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserInfoAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(getUserInfoAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setToken, setUserInfo, logout } = userSlice.actions;
export default userSlice.reducer;

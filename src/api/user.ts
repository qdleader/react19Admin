/**
 * 用户相关 API
 */

import request from '@/utils/request';
import type { LoginParams, LoginResponse, UserInfo } from '@/types';

/**
 * 用户登录
 */
export const login = (params: LoginParams) => {
  return request.post<LoginResponse>('/user/login', params);
};

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request.get<UserInfo>('/user/info');
};

/**
 * 退出登录
 */
export const logout = () => {
  return request.post('/user/logout');
};

/**
 * 修改密码
 */
export const updatePassword = (params: { oldPassword: string; newPassword: string }) => {
  return request.post('/user/password', params);
};

/**
 * 通用类型定义
 */

// API响应基础类型
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
  success: boolean;
}

// 分页请求参数
export interface PageParams {
  page: number;
  pageSize: number;
}

// 分页响应数据
export interface PageResult<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}

// 用户信息类型
export interface UserInfo {
  id: string | number;
  username: string;
  nickname?: string;
  email?: string;
  avatar?: string;
  roles?: string[];
  permissions?: string[];
}

// 登录参数
export interface LoginParams {
  username: string;
  password: string;
}

// 登录响应
export interface LoginResponse {
  token: string;
  userInfo: UserInfo;
}

// 路由元信息
export interface RouteMeta {
  title?: string;
  icon?: string;
  requireAuth?: boolean;
  roles?: string[];
  keepAlive?: boolean;
  hidden?: boolean;
}

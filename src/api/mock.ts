/**
 * Mock 数据 - 用于演示
 * 实际项目中可以删除此文件，使用真实 API
 */

import type { ApiResponse, UserInfo } from '@/types';

// 模拟延迟
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 模拟用户登录
 */
export const mockLogin = async (username: string, password: string): Promise<ApiResponse> => {
  await delay(1000);

  if (username === 'admin' && password === 'admin123') {
    return {
      code: 200,
      success: true,
      message: '登录成功',
      data: {
        token: 'mock-token-' + Date.now(),
        userInfo: {
          id: 1,
          username: 'admin',
          nickname: '管理员',
          email: 'admin@example.com',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
          roles: ['admin'],
          permissions: ['*:*:*'],
        },
      },
    };
  }

  return {
    code: 401,
    success: false,
    message: '用户名或密码错误',
    data: null,
  };
};

/**
 * 模拟获取用户信息
 */
export const mockGetUserInfo = async (): Promise<ApiResponse<UserInfo>> => {
  await delay(500);

  return {
    code: 200,
    success: true,
    message: '获取成功',
    data: {
      id: 1,
      username: 'admin',
      nickname: '管理员',
      email: 'admin@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
      roles: ['admin'],
      permissions: ['*:*:*'],
    },
  };
};

/**
 * 模拟获取数据列表
 */
export const mockGetDataList = async (page = 1, pageSize = 10): Promise<ApiResponse> => {
  await delay(800);

  const total = 50;
  const list = Array.from({ length: pageSize }, (_, index) => ({
    id: (page - 1) * pageSize + index + 1,
    name: `数据项 ${(page - 1) * pageSize + index + 1}`,
    description: `这是第 ${(page - 1) * pageSize + index + 1} 条数据`,
    status: Math.random() > 0.5 ? 'active' : 'inactive',
    createTime: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  }));

  return {
    code: 200,
    success: true,
    message: '获取成功',
    data: {
      list,
      total,
      page,
      pageSize,
    },
  };
};

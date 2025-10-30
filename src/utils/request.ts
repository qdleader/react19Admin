/**
 * Axios 请求封装
 * 包含请求/响应拦截器、错误处理、loading状态管理等
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { message } from 'antd';
import type { ApiResponse } from '@/types';

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 从 localStorage 获取 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 可以在这里添加 loading 状态
    // showLoading();

    return config;
  },
  (error: AxiosError) => {
    console.error('请求错误：', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    // 隐藏 loading
    // hideLoading();

    const { data } = response;

    // 根据实际业务调整判断逻辑
    if (data.code === 200 || data.success) {
      return data as any;
    }

    // 业务错误处理
    message.error(data.message || '请求失败');
    return Promise.reject(new Error(data.message || '请求失败'));
  },
  (error: AxiosError<ApiResponse>) => {
    // 隐藏 loading
    // hideLoading();

    // 处理 HTTP 状态码错误
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          message.error(data?.message || '请求参数错误');
          break;
        case 401:
          message.error('未授权，请重新登录');
          // 清除 token 并跳转到登录页
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          message.error('拒绝访问');
          break;
        case 404:
          message.error('请求的资源不存在');
          break;
        case 500:
          message.error('服务器内部错误');
          break;
        case 502:
          message.error('网关错误');
          break;
        case 503:
          message.error('服务不可用');
          break;
        case 504:
          message.error('网关超时');
          break;
        default:
          message.error(data?.message || `请求失败：${status}`);
      }
    } else if (error.request) {
      // 请求已发出但没有收到响应
      message.error('网络错误，请检查网络连接');
    } else {
      // 其他错误
      message.error(error.message || '请求失败');
    }

    return Promise.reject(error);
  }
);

// 封装请求方法
export interface RequestConfig extends AxiosRequestConfig {
  showError?: boolean; // 是否显示错误提示
}

class Request {
  /**
   * GET 请求
   */
  get<T = any>(url: string, params?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return service.get(url, { params, ...config });
  }

  /**
   * POST 请求
   */
  post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return service.post(url, data, config);
  }

  /**
   * PUT 请求
   */
  put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return service.put(url, data, config);
  }

  /**
   * DELETE 请求
   */
  delete<T = any>(url: string, params?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return service.delete(url, { params, ...config });
  }

  /**
   * PATCH 请求
   */
  patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return service.patch(url, data, config);
  }

  /**
   * 上传文件
   */
  upload<T = any>(url: string, file: File, config?: RequestConfig): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append('file', file);
    return service.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...config,
    });
  }

  /**
   * 下载文件
   */
  async download(url: string, params?: any, filename?: string): Promise<void> {
    try {
      const response = await service.get(url, {
        params,
        responseType: 'blob',
      });

      const blob = new Blob([response.data]);
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename || 'download';
      link.click();
      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      message.error('文件下载失败');
      throw error;
    }
  }
}

export default new Request();

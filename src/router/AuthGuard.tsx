/**
 * 路由守卫 - 权限控制
 */

import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';

interface AuthGuardProps {
  children: ReactNode;
  requiredRoles?: string[]; // 需要的角色权限
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, requiredRoles }) => {
  const location = useLocation();
  const { isLogin, userInfo } = useAppSelector((state) => state.user);

  // 未登录，跳转到登录页
  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 检查角色权限
  if (requiredRoles && requiredRoles.length > 0) {
    const userRoles = userInfo?.roles || [];
    const hasPermission = requiredRoles.some((role) => userRoles.includes(role));

    if (!hasPermission) {
      // 无权限，可以跳转到 403 页面或显示提示
      return <Navigate to="/403" replace />;
    }
  }

  return <>{children}</>;
};

export default AuthGuard;

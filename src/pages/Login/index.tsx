/**
 * 登录页
 */

import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Input, Button, Card, Typography, Space, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginAsync } from '@/redux/slices/userSlice';
import type { LoginParams } from '@/types';

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { loading, isLogin } = useAppSelector((state) => state.user);

  const from = (location.state as any)?.from?.pathname || '/';

  useEffect(() => {
    document.title = '登录 - QDleader Admin';
    // 如果已登录，直接跳转
    if (isLogin) {
      navigate(from, { replace: true });
    }
  }, [isLogin, navigate, from]);

  const handleSubmit = async (values: LoginParams) => {
    try {
      await dispatch(loginAsync(values)).unwrap();
      message.success('登录成功！');
      navigate(from, { replace: true });
    } catch (error: any) {
      message.error(error || '登录失败，请检查用户名和密码');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <Card
        style={{
          width: 400,
          maxWidth: '90%',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
          <Title level={2} style={{ marginBottom: 0 }}>
            QDleader Admin
          </Title>
          <Text type="secondary">欢迎登录系统</Text>

          <Form
            name="login"
            initialValues={{ username: 'admin', password: 'admin123' }}
            onFinish={handleSubmit}
            autoComplete="off"
            size="large"
          >
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
              <Input prefix={<UserOutlined />} placeholder="用户名" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="密码" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                style={{ height: 42 }}
              >
                登录
              </Button>
            </Form.Item>
          </Form>

          <div style={{ textAlign: 'left', width: '100%' }}>
            <Text type="secondary" style={{ fontSize: 12 }}>
              <div>测试账号：admin</div>
              <div>测试密码：admin123</div>
            </Text>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default Login;

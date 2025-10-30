/**
 * 首页
 */

import { useEffect } from 'react';
import { Card, Row, Col, Statistic, Button, Space, Typography, Divider, Tag } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  RiseOutlined,
  PlusOutlined,
  MinusOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { increment, decrement, reset } from '@/redux/slices/counterSlice';

const { Title, Paragraph, Text } = Typography;

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { value, step } = useAppSelector((state) => state.counter);
  const { userInfo } = useAppSelector((state) => state.user);

  useEffect(() => {
    document.title = '首页 - Alpha Account Activation';
  }, []);

  return (
    <div>
      {/* 欢迎区域 */}
      <Card bordered={false} style={{ marginBottom: 24 }}>
        <Title level={2}>欢迎回来，{userInfo?.nickname || userInfo?.username}！</Title>
        <Paragraph>
          这是一个基于 <Tag color="blue">React 19</Tag> + <Tag color="green">Vite</Tag> +{' '}
          <Tag color="purple">Redux Toolkit</Tag> + <Tag color="cyan">TypeScript</Tag> +{' '}
          <Tag color="orange">Ant Design</Tag> 构建的企业级应用模板
        </Paragraph>
        <Text type="secondary">当前时间: {new Date().toLocaleString('zh-CN')}</Text>
      </Card>

      {/* 统计卡片 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="总用户数"
              value={11280}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="总订单数"
              value={9360}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="总收入"
              value={125680}
              prefix={<DollarOutlined />}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="增长率"
              value={28.5}
              prefix={<RiseOutlined />}
              suffix="%"
              valueStyle={{ color: '#ff6b00' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Redux 计数器示例 */}
      <Card title="Redux 状态管理示例 - 计数器" bordered={false}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <Title level={1} style={{ fontSize: 72, margin: 0 }}>
              {value}
            </Title>
            <Text type="secondary">当前步长: {step}</Text>
          </div>

          <Divider />

          <Space size="middle" wrap style={{ justifyContent: 'center', width: '100%' }}>
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined />}
              onClick={() => dispatch(increment())}
            >
              增加
            </Button>
            <Button size="large" icon={<MinusOutlined />} onClick={() => dispatch(decrement())}>
              减少
            </Button>
            <Button danger size="large" icon={<ReloadOutlined />} onClick={() => dispatch(reset())}>
              重置
            </Button>
          </Space>

          <Paragraph style={{ textAlign: 'center', marginTop: 16 }}>
            <Text type="secondary">
              这是一个使用 Redux Toolkit 管理状态的示例。点击按钮可以看到状态的实时变化。
            </Text>
          </Paragraph>
        </Space>
      </Card>

      {/* 功能特性 */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} md={8}>
          <Card title="🚀 现代化技术栈" bordered={false}>
            <Paragraph>
              采用最新的 React 19 + Vite 5，配合 TypeScript 提供完整的类型支持，开发体验一流。
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="📦 状态管理" bordered={false}>
            <Paragraph>
              集成 Redux Toolkit，提供优雅的状态管理方案，支持异步操作和中间件扩展。
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="🎨 UI 组件库" bordered={false}>
            <Paragraph>
              使用 Ant Design 5 组件库，提供丰富的企业级 UI 组件和优秀的用户体验。
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="🔐 权限控制" bordered={false}>
            <Paragraph>内置路由守卫和权限验证机制，支持细粒度的权限控制和角色管理。</Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="🌐 网络请求" bordered={false}>
            <Paragraph>
              封装 Axios 请求库，统一处理请求/响应拦截、错误处理和 Loading 状态。
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="📝 代码规范" bordered={false}>
            <Paragraph>配置 ESLint + Prettier + Husky，确保代码质量和团队协作的一致性。</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

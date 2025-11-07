/**
 * 关于页面
 */

import { useEffect } from 'react';
import { Card, Descriptions, Typography, Space, Tag, Divider } from 'antd';
import { GithubOutlined, RocketOutlined, CodeOutlined, SafetyOutlined } from '@ant-design/icons';

const { Title, Paragraph, Link } = Typography;

const About: React.FC = () => {
  useEffect(() => {
    document.title = '关于 - QDleader Admin';
  }, []);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Title level={2}>
            <RocketOutlined /> 关于项目
          </Title>
          <Paragraph>
            这是一个企业级的前端应用模板，采用现代化的技术栈构建，为快速开发提供坚实的基础。
          </Paragraph>
          <Divider />
          <Descriptions title="项目信息" column={1}>
            <Descriptions.Item label="项目名称">QDleader Admin Web</Descriptions.Item>
            <Descriptions.Item label="版本号">1.0.0</Descriptions.Item>
            <Descriptions.Item label="作者">Your Name</Descriptions.Item>
            <Descriptions.Item label="创建时间">2024</Descriptions.Item>
          </Descriptions>
        </Space>
      </Card>

      <Card>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Title level={3}>
            <CodeOutlined /> 技术栈
          </Title>
          <Paragraph>
            <Space size={[8, 8]} wrap>
              <Tag color="blue">React 19</Tag>
              <Tag color="green">Vite 5</Tag>
              <Tag color="purple">Redux Toolkit</Tag>
              <Tag color="cyan">TypeScript</Tag>
              <Tag color="orange">Ant Design 5</Tag>
              <Tag color="magenta">React Router 6</Tag>
              <Tag color="red">Axios</Tag>
            </Space>
          </Paragraph>
        </Space>
      </Card>

      <Card>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Title level={3}>
            <SafetyOutlined /> 主要特性
          </Title>
          <ul>
            <li>
              <Paragraph>
                <strong>现代化技术栈：</strong>使用最新的 React 19 和 Vite 5，提供极速的开发体验
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>TypeScript 支持：</strong>完整的类型定义，减少运行时错误
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>状态管理：</strong>集成 Redux Toolkit，简化状态管理复杂度
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>路由系统：</strong>基于 React Router 6，支持路由懒加载和权限守卫
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>网络请求：</strong>封装 Axios，统一处理请求拦截和错误处理
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>UI 组件库：</strong>使用 Ant Design 5，提供丰富的企业级组件
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>代码规范：</strong>集成 ESLint、Prettier、Husky 和 Commitlint
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>工程化配置：</strong>完善的项目结构和构建配置
              </Paragraph>
            </li>
          </ul>
        </Space>
      </Card>

      <Card>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Title level={3}>
            <GithubOutlined /> 相关链接
          </Title>
          <Space direction="vertical">
            <Link href="https://react.dev" target="_blank">
              React 官方文档
            </Link>
            <Link href="https://vitejs.dev" target="_blank">
              Vite 官方文档
            </Link>
            <Link href="https://redux-toolkit.js.org" target="_blank">
              Redux Toolkit 官方文档
            </Link>
            <Link href="https://ant.design" target="_blank">
              Ant Design 官方文档
            </Link>
            <Link href="https://www.typescriptlang.org" target="_blank">
              TypeScript 官方文档
            </Link>
          </Space>
        </Space>
      </Card>
    </Space>
  );
};

export default About;

/**
 * App 根组件
 */

import { useRoutes } from 'react-router-dom';
import { ConfigProvider, App as AntdApp } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import routes from '@/router';
import { useAppSelector } from '@/redux/hooks';

function App() {
  const element = useRoutes(routes as any);
  const { theme } = useAppSelector((state) => state.app);

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 6,
        },
        algorithm: theme === 'dark' ? undefined : undefined, // 可扩展深色主题
      }}
    >
      <AntdApp>{element}</AntdApp>
    </ConfigProvider>
  );
}

export default App;

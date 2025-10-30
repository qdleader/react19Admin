/**
 * 404 页面
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 - 页面不存在';
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="抱歉，您访问的页面不存在"
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            返回首页
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;

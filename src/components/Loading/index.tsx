/**
 * Loading 加载组件
 */

import { Spin } from 'antd';

interface LoadingProps {
  tip?: string;
  size?: 'small' | 'default' | 'large';
}

const Loading: React.FC<LoadingProps> = ({ tip = '加载中...', size = 'large' }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
      }}
    >
      <Spin size={size} tip={tip} />
    </div>
  );
};

export default Loading;

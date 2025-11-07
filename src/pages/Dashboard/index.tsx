/**
 * 大屏主页面
 */
import React, { useEffect } from 'react';
import CHeader from './components/CHeader';
import CMap from './components/CMap';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import CFooter from './components/CFooter';
import './styles/index.scss';

const Dashboard: React.FC = () => {
  useEffect(() => {
    // 自适应缩放逻辑
    const handleResize = () => {
      const designWidth = 1920;
      const designHeight = 1080;
      const scale = Math.min(
        window.innerWidth / designWidth,
        window.innerHeight / designHeight
      );

      const container = document.querySelector('.dashboard-container') as HTMLElement;
      if (container) {
        container.style.transform = `scale(${scale})`;
        container.style.transformOrigin = 'top left';
      }
    };

    // 初始化时调用
    handleResize();

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="dashboard-container">
      {/* 顶部标题 */}
      <CHeader />
      {/* 地图部分 */}
      <CMap />
      {/* 左侧数据面板 */}
      <LeftPanel />
      {/* 右侧数据面板 */}
      <RightPanel />
      {/* 底部组件 */}
      <CFooter />
    </main>
  );
};

export default Dashboard;


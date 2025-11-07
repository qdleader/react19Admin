/**
 * 右侧数据面板容器
 */
import React from 'react';
import IndustryRevenue from './rightPanel/IndustryRevenue';
import Top5Tourists from './rightPanel/Top5Tourists';
import RealTimeHotWords from './rightPanel/RealTimeHotWords';
import './RightPanel.scss';

const RightPanel: React.FC = () => {
  return (
    <div className="right-panel">
      {/* 各行业收入 */}
      <IndustryRevenue />
      {/* 接待游客人数TOP5 */}
      <Top5Tourists />
      {/* 山东省实时热词 */}
      <RealTimeHotWords />
    </div>
  );
};

export default RightPanel;


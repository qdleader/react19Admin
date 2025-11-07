/**
 * 左侧数据面板容器
 */
import React from 'react';
import RankingOfScenicSpots from './leftPanel/RankingOfScenicSpots';
import AgeDistribution from './leftPanel/AgeDistribution';
import ReceptionOfTourists from './leftPanel/ReceptionOfTourists';
import './LeftPanel.scss';

const LeftPanel: React.FC = () => {
  return (
    <div className="left-panel">
      {/* 景点人流排名 */}
      <RankingOfScenicSpots />
      {/* 游客年龄分布 */}
      <AgeDistribution />
      {/* 年度接待游客比 */}
      <ReceptionOfTourists />
    </div>
  );
};

export default LeftPanel;


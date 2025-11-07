/**
 * 通用面板组件
 */
import React from 'react';
import './CPanel.scss';

interface CPanelProps {
  title: string;
  children: React.ReactNode;
}

const CPanel: React.FC<CPanelProps> = ({ title, children }) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <span>{title}</span>
      </div>
      <div className="panel-container">{children}</div>
    </div>
  );
};

export default CPanel;


/**
 * 景点人流排名组件
 */
import React, { useState, useEffect, useRef } from 'react';
import CPanel from '../common/CPanel';
import { rankingOfScenicSpots } from '../../assets/data/人流排名';
import './RankingOfScenicSpots.scss';

interface RankingItem {
  label: string;
  value: number;
}

const RankingOfScenicSpots: React.FC = () => {
  const [list, setList] = useState<RankingItem[]>([]);
  const [maxValue, setMaxValue] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    // 排序数据
    const sortedList = [...rankingOfScenicSpots].sort((a, b) => b.value - a.value);
    setList(sortedList);

    // 计算总和
    const total = rankingOfScenicSpots.reduce((acc, item) => acc + item.value, 0);
    setMaxValue(total);
  }, []);

  // 无缝滚动效果
  useEffect(() => {
    if (list.length === 0) return;

    const timer = setInterval(() => {
      setScrollTop((prev) => {
        const itemHeight = 40; // 每项高度
        const maxScroll = list.length * itemHeight;
        const newScroll = prev + 1;
        return newScroll >= maxScroll / 2 ? 0 : newScroll;
      });
    }, 50); // 滚动速度

    return () => clearInterval(timer);
  }, [list]);

  const getProgressValue = (value: number) => {
    if (maxValue === 0) return '0%';
    return -((maxValue - value) / maxValue) * 100 + '%';
  };

  // 复制列表用于无缝滚动
  const displayList = [...list, ...list];

  return (
    <CPanel title="景点人流排名">
      <div className="ranking-list" ref={scrollRef}>
        <div
          className="list-wrapper"
          style={{
            transform: `translateY(-${scrollTop}px)`,
            transition: 'transform 0.05s linear',
          }}
        >
          {displayList.map((item, index) => (
            <article className="list-item" key={`${item.label}-${index}`}>
              <section className="item-index">NO.{(index % list.length) + 1}</section>
              <section className="item-label">{item.label}</section>
              {/* 进度条 */}
              <div className="progress">
                <span
                  className="progress-content"
                  style={{
                    left: getProgressValue(item.value),
                  }}
                ></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </CPanel>
  );
};

export default RankingOfScenicSpots;


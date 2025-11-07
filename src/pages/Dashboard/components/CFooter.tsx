/**
 * 底部组件
 */
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import './CFooter.scss';
import 行李箱图标 from '../assets/images/行李箱图标.png';
import 收入图标 from '../assets/images/收入图标.png';
import 刷卡图标 from '../assets/images/刷卡图标.png';
import up from '../assets/images/up.png';
import down from '../assets/images/down.png';
import type { NumberData } from '../types';

const initialData: NumberData[] = [
  {
    id: 1,
    title: '2022年旅游业收入',
    value: 12345.6,
    unit: '万元',
    compare: 'down',
    proportion: 2.9,
    img: 收入图标,
  },
  {
    id: 2,
    title: '2022年来访游客数',
    value: 731.2,
    unit: '万人',
    compare: 'up',
    proportion: 1.6,
    img: 行李箱图标,
  },
  {
    id: 3,
    title: '2022年山东人口出游支出',
    value: 8373.1,
    unit: '万元',
    compare: 'down',
    proportion: 2.9,
    img: 刷卡图标,
  },
];

const CFooter: React.FC = () => {
  const [numberData, setNumberData] = useState<NumberData[]>(initialData);
  const [lastValues, setLastValues] = useState<number[]>(
    initialData.map((item) => item.value)
  );

  useEffect(() => {
    const randomizeNumberData = () => {
      setNumberData((prevData) => {
        const newData = prevData.map((item, idx) => {
          // 生成一个基于当前值的随机浮动（±10%）
          const randomFactor = 1 + (Math.random() - 0.5) * 0.2;
          const prevValue = lastValues[idx];
          const newValue = +(item.value * randomFactor).toFixed(1);

          // 计算变化百分比
          let proportion = 0;
          let compare: 'up' | 'down' = 'up';
          if (prevValue !== 0) {
            proportion = +(((newValue - prevValue) / Math.abs(prevValue)) * 100).toFixed(1);
            compare = proportion >= 0 ? 'up' : 'down';
            proportion = Math.abs(proportion);
          }

          // 更新lastValues
          setLastValues((prev) => {
            const newLastValues = [...prev];
            newLastValues[idx] = newValue;
            return newLastValues;
          });

          return {
            ...item,
            value: newValue,
            proportion,
            compare,
          };
        });

        return newData;
      });
    };

    const intervalId = setInterval(() => {
      randomizeNumberData();
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [lastValues]);

  return (
    <footer className="number-footer">
      {numberData.map((item) => (
        <div className="number-item" key={item.id}>
          {/* 标题 */}
          <div className="title">{item.title}</div>
          {/* 数据 */}
          <div className="data">
            <img className="data-img" src={item.img} alt="图标" />
            <div className="data-info">
              {/* 数字 */}
              <div className="number">
                <CountUp
                  className="number-value"
                  end={item.value}
                  decimals={1}
                  duration={2}
                  preserveValue
                />
                <span className="number-unit">{item.unit}</span>
              </div>
              {/* 比较信息 */}
              <div className="compare">
                <span className="compare-label">较上次</span>
                <img
                  className="compare-img"
                  src={item.compare === 'up' ? up : down}
                  alt="上涨下跌图标"
                />
                <span
                  className="compare-value"
                  style={{
                    color: item.compare === 'up' ? 'rgba(247, 61, 75, 1)' : 'rgba(11, 212, 167, 1)',
                  }}
                >
                  {item.proportion}%
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </footer>
  );
};

export default CFooter;


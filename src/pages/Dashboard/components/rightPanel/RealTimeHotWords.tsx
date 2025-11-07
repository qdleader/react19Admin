/**
 * 山东实时热词组件
 */
import React, { useState, useEffect } from 'react';
import CPanel from '../common/CPanel';
import CEcharts from '../common/CEcharts';
import defaultIcon from '../../assets/images/real-circle-defalut.png';
import hotIcon from '../../assets/images/real-circle-hot.png';
import './RealTimeHotWords.scss';
import type { EChartsOption } from 'echarts';

const RealTimeHotWords: React.FC = () => {
  const [option, setOption] = useState<EChartsOption>({});

  const initEcharts = (): EChartsOption => {
    const wordsData: {
      name: string;
      value: number;
      position: number[];
    }[] = [
      { name: '海边', value: 19, position: [50, 50] },
      { name: '人多', value: 4, position: [10, 30] },
      { name: '孔子', value: 8, position: [85, 80] },
      { name: '老师儿', value: 2, position: [27, 55] },
      { name: '热情', value: 6, position: [68, 17] },
      { name: '豪爽', value: 7, position: [20, 90] },
      { name: '大葱', value: 5, position: [35, 20] },
      { name: '美食', value: 4, position: [65, 89] },
      { name: '泰山', value: 16, position: [90, 40] },
    ];

    const optionData: any = [];
    wordsData.forEach((item) => {
      optionData.push({
        name: item.name,
        number: item.value,
        value: item.position,
        symbolSize: item.value > 15 ? 70 : 60,
        symbol: item.value > 15 ? 'image://' + hotIcon : 'image://' + defaultIcon,
      });
    });

    return {
      grid: {
        show: false,
        top: 20,
        left: 10,
        right: 10,
        bottom: 10,
      },
      xAxis: [
        {
          type: 'value',
          show: false,
          min: 0,
          max: 100,
        },
      ],
      yAxis: [
        {
          min: 0,
          show: false,
          max: 100,
        },
      ],
      series: [
        {
          type: 'scatter',
          label: {
            show: true,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter: (params: any) => {
              if (params.data.number > 15) {
                return `{hotName|${params.data.name}}\n{hotValue|${params.data.number}%}`;
              } else {
                return `{name|${params.data.name}}\n{value|${params.data.number}%}`;
              }
            },
            rich: {
              hotName: {
                color: 'rgba(218, 163, 88, 1)',
                fontSize: 16,
                padding: [0, 0, 8, 0],
                align: 'center',
              },
              hotValue: {
                color: 'rgba(218, 163, 88, 1)',
                fontSize: 14,
              },
              name: {
                color: 'rgba(218, 198, 88, 1)',
                fontSize: 13,
                padding: [0, 0, 8, 0],
                align: 'center',
              },
              value: {
                color: 'rgba(218, 198, 88, 1)',
                fontSize: 12,
                align: 'center',
              },
            },
          },
          animationDurationUpdate: 500,
          animationEasingUpdate: 500,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          animationDelay: function (idx: number) {
            return idx * 100;
          },
          data: optionData,
        } as any,
      ],
    };
  };

  useEffect(() => {
    setOption(initEcharts());
  }, []);

  return (
    <CPanel title="山东实时热词">
      <div className="words">
        <CEcharts option={option} />
      </div>
    </CPanel>
  );
};

export default RealTimeHotWords;


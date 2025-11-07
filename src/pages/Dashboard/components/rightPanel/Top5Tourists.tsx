/**
 * 接待游客人数TOP5组件
 */
import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import CPanel from '../common/CPanel';
import CEcharts, { CEchartsRef } from '../common/CEcharts';
import type { EChartsOption } from 'echarts';

const VALUE = [123, 100, 125, 100, 125];

const Top5Tourists: React.FC = () => {
  const [option, setOption] = useState<EChartsOption>({});
  const chartRef = useRef<CEchartsRef>(null);
  const highlightTimerRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  const createEchartBar = (): EChartsOption => {
    return {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: ['青岛市', '济南市', '烟台市', '威海市', '潍坊市'],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#C5D6E6',
          fontSize: 12,
        },
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(52, 71, 112, 1)',
            type: 'dashed',
          },
        },
        axisLabel: {
          color: '#C5D6E6',
          fontSize: 14,
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          name: '数(人次)',
          type: 'pictorialBar',
          barWidth: '150%',
          symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
          label: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: 'rgba(201, 211, 234, 1)',
            offset: [0, -10],
          },
          itemStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(
              0,
              1,
              0,
              0,
              [
                {
                  offset: 0,
                  color: 'rgba(94, 111, 153, 0.2)',
                },
                {
                  offset: 0.6,
                  color: 'rgba(94, 111, 153, 0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(94, 111, 153, 1)',
                },
              ],
              false
            ),
            borderColor: 'rgba(109, 128, 175, 1)',
            borderWidth: 4,
            borderRadius: [100, 100],
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: 'rgba(218, 163, 88, 0.3)',
                  },
                  {
                    offset: 0.6,
                    color: 'rgba(218, 163, 88, 0.8)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(218, 163, 88, 0)',
                  },
                ],
                false
              ),
              borderColor: 'rgba(218, 163, 88, 1)',
            },
          },
          data: [123, 100, 125, 100, 125],
          z: 10,
        } as any,
      ],
    };
  };

  const startHighlightLoop = (chart: echarts.ECharts) => {
    if (!chart) return;

    if (highlightTimerRef.current) {
      clearInterval(highlightTimerRef.current);
      highlightTimerRef.current = null;
    }

    highlightTimerRef.current = setInterval(() => {
      chart.dispatchAction({
        type: 'downplay',
      });
      chart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndexRef.current,
      });
      currentIndexRef.current = (currentIndexRef.current + 1) % VALUE.length;
    }, 1500);
  };

  useEffect(() => {
    setOption(createEchartBar());

    return () => {
      if (highlightTimerRef.current) {
        clearInterval(highlightTimerRef.current);
      }
    };
  }, []);

  return (
    <CPanel title="接待游客人数TOP5">
      <CEcharts ref={chartRef} option={option} onLoad={startHighlightLoop} />
    </CPanel>
  );
};

export default Top5Tourists;


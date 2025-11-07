/**
 * 各行业收入组件
 */
import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import CPanel from '../common/CPanel';
import CEcharts, { CEchartsRef } from '../common/CEcharts';
import type { EChartsOption } from 'echarts';

const VALUE = [100, 200, 300, 400, 500, 600, 700];

const IndustryRevenue: React.FC = () => {
  const [option, setOption] = useState<EChartsOption>({});
  const chartRef = useRef<CEchartsRef>(null);
  const highlightTimerRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  const createEchartBar = (): EChartsOption => {
    const xAxisData = ['旅游', '住宿', '餐饮', '购物', '娱乐', '交通', '其他'];
    const seriesData = [
      { value: 100 },
      { value: 200 },
      { value: 300 },
      { value: 400 },
      { value: 500 },
      { value: 600 },
      { value: 700 },
    ];

    return {
      grid: {
        left: '0%',
        right: '0%',
        top: '20%',
        bottom: '10%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: xAxisData,
        axisLine: {
          show: true,
          lineStyle: {
            width: 2,
            color: 'rgba(76, 93, 130, 1)',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontSize: 12,
          color: '#C5D6E6',
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        name: '亿',
        nameTextStyle: {
          color: 'rgba(201, 211, 234, 1)',
          fontSize: 14,
          padding: [0, 32, 12, 0],
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(52, 71, 112, 1)',
            type: 'dashed',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontSize: 14,
          color: '#C5D6E6',
        },
      },
      series: [
        {
          type: 'pictorialBar',
          name: '渐变背景',
          barWidth: 14,
          symbol: 'rect',
          symbolSize: '100%',
          symbolPosition: 'start',
          symbolOffset: [0, 0],
          label: {
            show: true,
            position: 'top',
            formatter: (params: any) => {
              return seriesData[params.dataIndex].value.toString();
            },
            fontSize: 12,
            lineHeight: 16,
            color: '#93B9FF',
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(218, 163, 88, 1)',
                },
                {
                  offset: 1,
                  color: 'rgba(255, 130, 54, 1)',
                },
              ]),
            },
          },
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(197, 213, 249, 1)',
              },
              {
                offset: 1,
                color: 'rgba(120, 144, 199, 1)',
              },
            ]),
          },
          z: 1,
          zlevel: 0,
          data: seriesData.map((item) => item.value),
        } as any,
        {
          type: 'pictorialBar',
          name: '块状切片',
          itemStyle: {
            color: '#011140',
          },
          barWidth: 14,
          symbolRepeat: 28,
          symbol: 'rect',
          symbolClip: true,
          symbolSize: [14, 2],
          symbolPosition: 'start',
          symbolOffset: [0, 0],
          data: seriesData.map((item) => item.value),
          z: 2,
          zlevel: 0,
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
    <CPanel title="各行业收入">
      <CEcharts ref={chartRef} option={option} onLoad={startHighlightLoop} />
    </CPanel>
  );
};

export default IndustryRevenue;


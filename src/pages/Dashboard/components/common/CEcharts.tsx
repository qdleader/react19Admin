/**
 * ECharts 封装组件
 */
import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import * as echarts from 'echarts';
import './CEcharts.scss';

interface CEchartsProps {
  option: echarts.EChartsOption;
  onLoad?: (chart: echarts.ECharts) => void;
  onClick?: (params: any) => void;
}

export interface CEchartsRef {
  setDataZoom: (start: number, end: number) => void;
  getInstance: () => echarts.ECharts | null;
}

const CEcharts = forwardRef<CEchartsRef, CEchartsProps>(
  ({ option, onLoad, onClick }, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const instanceRef = useRef<echarts.ECharts | null>(null);

    useImperativeHandle(ref, () => ({
      setDataZoom: (start: number, end: number) => {
        if (instanceRef.current && option) {
          const newOption = { ...option };
          if ((newOption as any).dataZoom) {
            (newOption as any).dataZoom[0].start = start;
            (newOption as any).dataZoom[0].end = end;
          }
          instanceRef.current.setOption(newOption);
        }
      },
      getInstance: () => instanceRef.current,
    }));

    useEffect(() => {
      if (!chartRef.current) return;

      // 初始化 ECharts 实例
      if (!instanceRef.current) {
        instanceRef.current = echarts.init(chartRef.current);

        // 绑定点击事件
        if (onClick) {
          instanceRef.current.on('click', onClick);
        }
      }

      // 设置配置项
      if (option) {
        instanceRef.current.setOption(option);
        if (onLoad) {
          onLoad(instanceRef.current);
        }
      }

      // 监听窗口大小变化
      const handleResize = () => {
        instanceRef.current?.resize();
      };
      window.addEventListener('resize', handleResize);

      // 清理函数
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [option, onLoad, onClick]);

    // 组件卸载时销毁实例
    useEffect(() => {
      return () => {
        if (instanceRef.current) {
          instanceRef.current.dispose();
          instanceRef.current = null;
        }
      };
    }, []);

    return <div ref={chartRef} className="echarts-container" />;
  }
);

CEcharts.displayName = 'CEcharts';

export default CEcharts;


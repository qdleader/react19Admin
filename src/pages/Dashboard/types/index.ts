// 大屏类型定义

export interface RankingData {
  label: string;
  value: number;
}

export interface NumberData {
  id?: number;
  title: string;
  value: number;
  unit: string;
  compare: 'up' | 'down';
  proportion: number;
  img: string;
}

export interface DistrictData {
  name: string;
  value: number;
  point: number[];
}

export interface WordData {
  name: string;
  value: number;
  position: number[];
}


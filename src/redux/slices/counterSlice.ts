/**
 * 计数器状态管理切片 - 示例
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  step: number;
}

const initialState: CounterState = {
  value: 0,
  step: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 增加
    increment: (state) => {
      state.value += state.step;
    },
    // 减少
    decrement: (state) => {
      state.value -= state.step;
    },
    // 设置值
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    // 设置步长
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    // 重置
    reset: (state) => {
      state.value = 0;
      state.step = 1;
    },
  },
});

export const { increment, decrement, setValue, setStep, reset } = counterSlice.actions;

export default counterSlice.reducer;

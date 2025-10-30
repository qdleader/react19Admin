/**
 * 倒计时 Hook
 */

import { useState, useEffect, useRef } from 'react';

interface UseCountDownOptions {
  initialCount?: number;
  onEnd?: () => void;
}

export const useCountDown = ({ initialCount = 60, onEnd }: UseCountDownOptions = {}) => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && count > 0) {
      timerRef.current = setTimeout(() => {
        setCount((c) => c - 1);
      }, 1000);
    } else if (count === 0 && isRunning) {
      setIsRunning(false);
      onEnd?.();
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [count, isRunning, onEnd]);

  const start = () => {
    setCount(initialCount);
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const reset = () => {
    stop();
    setCount(0);
  };

  return { count, isRunning, start, stop, reset };
};

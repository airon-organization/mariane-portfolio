import { useCallback, useState } from "react";

export function usePushButton(timeout: number = 1000) {
  const [pushed, setPushed] = useState(false);
  const handlePush = useCallback(() => {
    setPushed(true);
    setTimeout(() => setPushed(false), timeout);
  }, [timeout]);

  return [pushed, handlePush] as const;
}

export function useDelayCallback(
  callback: (...args: any[]) => void,
  delay: number
) {
  const [completed, setCompleted] = useState(false);
  const handleComplete = useCallback(
    (...args: any[]) => {
      setCompleted(true);
      setTimeout(() => setCompleted(false), delay);
      callback(...args);
    },
    [callback, delay]
  );
  return [completed, handleComplete];
}


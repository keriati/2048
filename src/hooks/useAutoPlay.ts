import { useEffect, useState } from 'react';

type intervalHook = (
  callback: (stopAutoPlay: () => void) => void,
  delay: number,
) => { autoPlayActive: boolean; stopAutoPlay: () => void };

export const useAutoPlay: intervalHook = (callback, delay) => {
  const [autoPlayActive, setAutoPlayActive] = useState(true);

  useEffect(() => {
    if (autoPlayActive) {
      const id = setInterval(() => {
        callback(() => {
          setAutoPlayActive(false);
        });
      }, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay, callback, autoPlayActive]);

  return {
    autoPlayActive,
    stopAutoPlay: () => {
      setAutoPlayActive(false);
    },
  };
};

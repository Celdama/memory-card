import { useEffect } from 'react';

export const useSetLocalStorage = (item) => {
  useEffect(() => {
    localStorage.setItem('bestScore', JSON.stringify(item));
  }, [item]);
};

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function useStoreState<T>(
  _key: string,
  _initialValue: T | (() => T)
): [T, Dispatch<SetStateAction<T>>];
function useStoreState<T = undefined>(
  _key: string
): [T | undefined, Dispatch<SetStateAction<T | undefined>>];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useStoreState<T = undefined>(
  key: string,
  initialValue?: T | (() => T)
) {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key)
        setValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue]);

  return [value, setValue] as const;
}

export default useStoreState;

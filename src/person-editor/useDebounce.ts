import { useEffect } from "react";

export function useDebounce(fn: () => void, timeout: number): void {
  useEffect(() => {
    const handle = setTimeout(fn, timeout);

    return () => clearTimeout(handle);
  }, [fn, timeout]);
}

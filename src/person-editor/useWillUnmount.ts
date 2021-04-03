import { useEffect, useRef } from "react";

export function useWillUnmount(fn: () => void): void {
  const functionRef = useRef(fn);
  functionRef.current = fn;

  useEffect(() => {
    return () => functionRef.current();
  }, []);
}

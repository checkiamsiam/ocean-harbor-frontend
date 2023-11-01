import { useEffect } from "react";

const useClickOutside = (ref: any, func: () => void) => {
  useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      func();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, func]);
};

export default useClickOutside;
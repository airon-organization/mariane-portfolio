import { useEffect, useState } from "react";

export default function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
  callback?: () => void
) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            callback?.();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    if (ref?.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [callback, ref]);
  return isVisible;
}


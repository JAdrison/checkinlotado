import { useEffect, useRef } from "react";

export function useScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onScroll = () => {
      if (!video.duration) return;
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (windowH - rect.top) / (rect.height + windowH))
      );
      const targetTime = progress * video.duration;

      // Smooth interpolation via rAF
      const animate = () => {
        currentTimeRef.current = lerp(currentTimeRef.current, targetTime, 0.08);
        video.currentTime = currentTimeRef.current;
        if (Math.abs(currentTimeRef.current - targetTime) > 0.01) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    video.addEventListener("loadedmetadata", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      video.removeEventListener("loadedmetadata", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { containerRef, videoRef };
}

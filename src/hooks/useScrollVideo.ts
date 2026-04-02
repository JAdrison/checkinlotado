import { useEffect, useRef } from "react";

export function useScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const onScroll = () => {
      if (!video.duration) return;
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      // 0 when top of container hits bottom of viewport, 1 when bottom hits top
      const progress = Math.min(
        1,
        Math.max(0, (windowH - rect.top) / (rect.height + windowH))
      );
      video.currentTime = progress * video.duration;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    video.addEventListener("loadedmetadata", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      video.removeEventListener("loadedmetadata", onScroll);
    };
  }, []);

  return { containerRef, videoRef };
}

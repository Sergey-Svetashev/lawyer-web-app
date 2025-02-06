import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";

export const Showcase = ({ urls }: { urls: Array<string> }) => {
  const showcase = useRef<HTMLDivElement>(null);
  const lastImage = useRef<HTMLImageElement>(null);
  const [loadedImages, setLoadedImages] = useState<Array<boolean>>([]);
  
  const imageLoadHandler = useCallback((index: number) => {
    const updatedLoadedImages = [...loadedImages];

    updatedLoadedImages[index] = true;
    setLoadedImages(updatedLoadedImages);
  }, []);

  useEffect(() => {
    if (
      loadedImages.length === urls.length &&
      loadedImages.reduce<boolean>((_, curr) => curr, true) &&
      lastImage.current?.offsetWidth
    ) {
      showcase.current?.animate(
        [
          { transform: "translateX(0)" },
          {
            transform: `translateX(-${
              showcase.current?.offsetWidth - lastImage.current.offsetWidth
            }px)`,
          },
        ],
        {
          duration: 3000 * urls.length,
          iterations: Infinity,
          direction: "alternate",
        }
      );
    }
  }, [loadedImages]);

  return (
    <div className="showcase">
      <div id="showcase" className="showcase__container" ref={showcase}>
        {urls.map((url, index) => (
          <div className="showcase__item">
            <img
              src={url}
              alt="alt"
              onLoad={() => imageLoadHandler(index)}
              ref={lastImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

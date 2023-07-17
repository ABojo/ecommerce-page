import { useState } from "react";
import styles from "./Lightbox.module.scss";

interface LightboxProps {
  images: string[];
  thumbnails: string[];
  onClose: () => void;
  startIndex: number;
}

export default function Lightbox({ images, thumbnails, onClose, startIndex }: LightboxProps) {
  const [imageIndex, setImageIndex] = useState(startIndex);

  function previousImage() {
    setImageIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex > -1 ? newIndex : images.length - 1;
    });
  }
  function nextImage() {
    setImageIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex < images.length ? newIndex : 0;
    });
  }

  return (
    <div className={styles.lightbox}>
      <div className={styles.lightbox__inner}>
        <button className={styles.lightbox__close} onClick={onClose}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className={styles.lightbox__main}>
          <button className={styles.lightbox__left} onClick={previousImage}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1 3 9l8 8" stroke="currentColor" stroke-width="3" fill="none" />
            </svg>
          </button>
          <img src={images[imageIndex]} alt="Main" />
          <button className={styles.lightbox__right} onClick={nextImage}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="m2 1 8 8-8 8" stroke="currentColor" stroke-width="3" fill="none" />
            </svg>
          </button>
        </button>
        <div className={styles.lightbox__thumbnails}>
          {thumbnails.map((thumbnail, i) => {
            let buttonClass = styles.lightbox__thumbnail;

            if (i === imageIndex) buttonClass += ` ${styles["lightbox__thumbnail--active"]}`;

            return (
              <button
                key={i}
                className={buttonClass}
                onClick={() => {
                  setImageIndex(i);
                }}
              >
                <img src={thumbnail} alt="Thumbnail" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

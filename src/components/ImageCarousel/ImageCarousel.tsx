import { useState } from "react";
import styles from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
  images: string[];
  thumbnails: string[];
}

export default function ImageCarousel({ images, thumbnails }: ImageCarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className={styles.carousel}>
      <button className={styles.carousel__main}>
        <img src={images[imageIndex]} alt="Main" />
      </button>
      <div className={styles.carousel__thumbnails}>
        {thumbnails.map((thumbnail, i) => {
          let buttonClass = styles.carousel__thumbnail;

          if (i === imageIndex) buttonClass += ` ${styles["carousel__thumbnail--active"]}`;

          return (
            <button
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
  );
}

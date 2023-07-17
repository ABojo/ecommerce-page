import { useState } from "react";
import Lightbox from "../Lightbox/Lightbox";
import styles from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
  images: string[];
  thumbnails: string[];
}

export default function ImageCarousel({ images, thumbnails }: ImageCarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <div className={styles.carousel}>
      {showLightbox ? (
        <Lightbox
          startIndex={imageIndex}
          images={images}
          thumbnails={thumbnails}
          onClose={() => {
            setShowLightbox(false);
          }}
        />
      ) : null}
      <button className={styles.carousel__main} onClick={() => setShowLightbox(true)}>
        <img src={images[imageIndex]} alt="Main" />
      </button>
      <div className={styles.carousel__thumbnails}>
        {thumbnails.map((thumbnail, i) => {
          let buttonClass = styles.carousel__thumbnail;

          if (i === imageIndex) buttonClass += ` ${styles["carousel__thumbnail--active"]}`;

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
  );
}

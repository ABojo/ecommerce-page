import { useState } from "react";
import Lightbox from "../Lightbox/Lightbox";
import styles from "./ImageCarousel.module.scss";
import useCounter from "../../hooks/useCounter";

interface ImageCarouselProps {
  images: string[];
  thumbnails: string[];
}

export default function ImageCarousel({ images, thumbnails }: ImageCarouselProps) {
  const { counter, decrementCounter, incrementCounter, setCounter } = useCounter(images.length - 1);
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <div className={styles.carousel}>
      {showLightbox ? (
        <Lightbox
          startIndex={counter}
          images={images}
          thumbnails={thumbnails}
          onClose={() => {
            setShowLightbox(false);
          }}
        />
      ) : null}
      <div className={styles.carousel__main}>
        <button className={styles.carousel__lightbox} onClick={() => setShowLightbox(true)}></button>
        <button className={styles.carousel__left} onClick={decrementCounter}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1 3 9l8 8" stroke="currentColor" stroke-width="3" fill="none" />
          </svg>{" "}
        </button>
        <button className={styles.carousel__right} onClick={incrementCounter}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="m2 1 8 8-8 8" stroke="currentColor" stroke-width="3" fill="none" />
          </svg>{" "}
        </button>
        <img src={images[counter]} alt="Main" />
      </div>
      <div className={styles.carousel__thumbnails}>
        {thumbnails.map((thumbnail, i) => {
          let buttonClass = styles.carousel__thumbnail;

          if (i === counter) buttonClass += ` ${styles["carousel__thumbnail--active"]}`;

          return (
            <button
              key={i}
              className={buttonClass}
              onClick={() => {
                setCounter(i);
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

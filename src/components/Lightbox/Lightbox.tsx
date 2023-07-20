import styles from "./Lightbox.module.scss";
import useCounter from "../../hooks/useCounter";

interface LightboxProps {
  images: string[];
  thumbnails: string[];
  onClose: () => void;
  startIndex: number;
}

export default function Lightbox({ images, thumbnails, onClose, startIndex }: LightboxProps) {
  const { counter, setCounter, decrementCounter, incrementCounter } = useCounter(images.length - 1, startIndex);

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
        <div className={styles.lightbox__main}>
          <button className={styles.lightbox__left} onClick={decrementCounter}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1 3 9l8 8" stroke="currentColor" stroke-width="3" fill="none" />
            </svg>
          </button>
          <img src={images[startIndex]} alt="Main" />
          <button className={styles.lightbox__right} onClick={incrementCounter}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="m2 1 8 8-8 8" stroke="currentColor" stroke-width="3" fill="none" />
            </svg>
          </button>
        </div>
        <div className={styles.lightbox__thumbnails}>
          {thumbnails.map((thumbnail, i) => {
            let buttonClass = styles.lightbox__thumbnail;

            if (i === counter) buttonClass += ` ${styles["lightbox__thumbnail--active"]}`;

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
    </div>
  );
}

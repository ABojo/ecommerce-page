import { useState, useContext } from "react";
import styles from "./Product.module.scss";
import { CartContext } from "../../contexts/CartContext";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

interface ProductProps {
  brand: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  thumbnails: string[];
  images: string[];
}

export default function Product({ brand, name, description, price, discount, images, thumbnails }: ProductProps) {
  const { addToCart } = useContext(CartContext);
  const currentPrice = discount ? price * (discount * 0.01) : price;
  const [quantity, setQuantity] = useState(0);

  function incrementQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decrementQuantity() {
    setQuantity((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  }

  function addToCartOnClick() {
    const newCartItem = { id: name, thumbnail: thumbnails[0], name, price: currentPrice, quantity };

    addToCart(newCartItem);
    setQuantity(0);
  }

  return (
    <main className={styles.product}>
      <ImageCarousel images={images} thumbnails={thumbnails} />
      <div className={styles.product__info}>
        <span className={styles.product__brand}>{brand}</span>
        <h1 className={styles.product__name}>{name}</h1>
        <p className={styles.product__description}>{description}</p>
        <p className={styles.product__price}>
          ${currentPrice.toFixed(2)}
          {discount ? <span>{discount}%</span> : null}
        </p>
        {discount ? <span className={styles.product__crossed}>${price.toFixed(2)}</span> : null}
        <div className={styles.product__controls}>
          <div className={styles.product__amount}>
            <button
              className={styles.product__decrease}
              onClick={decrementQuantity}
              aria-label="Decrease quantity by one"
            >
              -
            </button>
            <span className={styles.product__quantity}>{quantity}</span>
            <button
              className={styles.product__increase}
              onClick={incrementQuantity}
              aria-label="increase quantity by one"
            >
              +
            </button>
          </div>
          <button className={styles.product__add} onClick={addToCartOnClick}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="currentColor"
                fill-rule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}

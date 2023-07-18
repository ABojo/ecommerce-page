import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItemT from "../../types/CartItem";
import styles from "./CartItem.module.scss";

interface CartItemProps {
  item: CartItemT;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useContext(CartContext);
  const [showDelete, setShowDelete] = useState(false);

  function removeFromCartOnClick() {
    removeFromCart(item);
  }

  function toggleDeleteDialog() {
    setShowDelete((prev) => !prev);
  }

  return (
    <div className={styles.item}>
      {showDelete ? (
        <div className={styles.delete}>
          <p className={styles.delete__text}>Remove this from your cart?</p>
          <div className={styles.delete__buttons}>
            <button className={styles.delete__cancel} onClick={toggleDeleteDialog}>
              Cancel
            </button>
            <button className={styles.delete__confirm} onClick={removeFromCartOnClick}>
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <>
          <img className={styles.item__thumbnail} src={item.thumbnail} alt={item.name} />
          <div className={styles.item__details}>
            <p className={styles.item__name}>{item.name}</p>
            <p className={styles.item__price}>
              ${item.price.toFixed(2)} x {item.quantity} <span>${(item.price * item.quantity).toFixed(2)}</span>
            </p>
          </div>
          <button aria-label="Delete Item" className={styles.item__delete} onClick={toggleDeleteDialog}>
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path
                  d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                  id="a"
                />
              </defs>
              <use fill="currentColor" fill-rule="nonzero" xlinkHref="#a" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

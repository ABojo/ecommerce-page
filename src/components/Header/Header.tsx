import Cart from "../Cart/Cart";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src="images/logo.svg" alt="Sneakers Logo" />
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#">
              Collections
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#">
              Men
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#">
              Women
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#">
              About
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.header__info}>
        <Cart />
        <button className={styles.header__user}>
          <img src="images/image-avatar.png" alt="User avatar" />
        </button>
      </div>
    </header>
  );
}

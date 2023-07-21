import { useState } from "react";
import styles from "./MobileNav.module.scss";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.open} aria-label={"Open mobile navigation"} onClick={() => setIsOpen(true)}>
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className={styles.overlay}>
          <nav className={styles.overlay__nav}>
            <button className={styles.overlay__close} onClick={() => setIsOpen(false)}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>{" "}
            </button>
            <ul className={styles.overlay__list}>
              <li className={styles.overlay__item}>
                <a className={styles.overlay__link} href="#">
                  Collections
                </a>
              </li>
              <li className={styles.overlay__item}>
                <a className={styles.overlay__link} href="#">
                  Men
                </a>
              </li>
              <li className={styles.overlay__item}>
                <a className={styles.overlay__link} href="#">
                  Women
                </a>
              </li>
              <li className={styles.overlay__item}>
                <a className={styles.overlay__link} href="#">
                  About
                </a>
              </li>
              <li className={styles.overlay__item}>
                <a className={styles.overlay__link} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

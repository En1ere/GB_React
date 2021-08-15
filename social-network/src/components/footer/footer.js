import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.footerText}>&copy; 2021</h1>
    </footer>
  );
}

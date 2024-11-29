import styles from '../module/parentcontainer.module.css';

export default function Container({ children }) {
  return <div className={styles.parentcontainer}>{children}</div>;
}

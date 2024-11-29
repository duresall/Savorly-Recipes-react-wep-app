import styles from "../module/innercontainer.module.css";

export default function Innercontianer({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}

import styles from "./Navigation.module.scss";
import Logo from "./Logo";

export default function Navigation() {
  return <nav className={styles.nav}><Logo/></nav>;
}

import styles from "./MenuIcon.module.scss";
import { Fragment } from "react";

export default function MenuIcon(props: {
  clicked: boolean;
  menuAnimationHandler: () => void;
}) {
  return (
    <Fragment>
      <div
        className={styles.iconContainer}
        onClick={props.menuAnimationHandler}
        tabIndex={0}
      >
        <div className={props.clicked ? styles.changedBar1 : styles.bar1}></div>
        <div className={props.clicked ? styles.changedBar2 : styles.bar2}></div>
        <div className={props.clicked ? styles.changedBar3 : styles.bar3}></div>
      </div>
    </Fragment>
  );
}

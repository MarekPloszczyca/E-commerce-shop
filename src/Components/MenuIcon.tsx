import styles from "./MenuIcon.module.scss";
import { useState, Fragment } from "react";

export default function MenuIcon(props: { menu: () => void }) {
  const [clicked, setClicked] = useState(false);

  const menuDisplay = (shown: boolean) => {
    props.menu();
    setClicked(shown);
  };

  const menuAnimationHandler = () => {
    clicked ? menuDisplay(false) : menuDisplay(true);
  };

  return (
    <Fragment>
      <div
        className={styles.iconContainer}
        onClick={menuAnimationHandler}
        
        tabIndex={0}
      >
        <div className={clicked ? styles.changedBar1 : styles.bar1}></div>
        <div className={clicked ? styles.changedBar2 : styles.bar2}></div>
        <div className={clicked ? styles.changedBar3 : styles.bar3}></div>
      </div>
    </Fragment>
  );
}

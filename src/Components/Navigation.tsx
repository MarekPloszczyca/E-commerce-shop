import styles from "./Navigation.module.scss";
import Logo from "./Logo";
import IconMenu from "./MenuIcon";
import { CartOutline } from "react-ionicons";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import NavigationOptions from "./NavigationOptions";

export default function Navigation() {
  const [display, setDisplay] = useState(false);
  const [categories, setCategories] = useState(false);

  const displayHandler = (
    state: boolean,
    func: Dispatch<SetStateAction<boolean>>
  ) => {
    state ? func(false) : func(true);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.upperNav}>
        <IconMenu
          menu={() => {
            displayHandler(display, setDisplay);
          }}
        />
        <Logo />
        <CartOutline />
      </div>
      <div className={display ? styles.shownNav : styles.hiddenNav}>
        <div className={styles.innerNav}>
          
            <NavigationOptions
              categories={categories}
              displayHandler={() => {displayHandler(categories, setCategories)}}
              stateFunction={setCategories}
            />
         
        </div>
      </div>
    </nav>
  );
}

import { Fragment, useState } from "react";
import styles from "./UserCart.module.scss";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import SectionHeader from "../Components/SectionHeader";
import Cart from "../Components/Cart";
import Reminder from "../Components/Reminder";

export default function UserCart() {
  const [reminder, setReminder] = useState(false);

  const reminderHandler = (boolean: boolean) => {
    setReminder(boolean);
  };

  return (
    <Fragment>
      <Navigation visible={true} />
      {reminder && <Reminder />}
      <SectionHeader text="Your cart" />
      <div className={styles.container}>
        <Cart reminder={reminderHandler} />
      </div>
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}

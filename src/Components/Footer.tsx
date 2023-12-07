import styles from "./Footer.module.scss";
import { useState } from "react";
import { CaretDownOutline } from "react-ionicons";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import Facebook from "../Assets/Socials/Facebook.png";
import Instagram from "../Assets/Socials/Instagram.png";

export default function Footer() {
  const [informationsDisplay, setInformationsDisplay] = useState(false);
  const [deliveryDisplay, setDeliveryDisplay] = useState(false);

  const displayInformationsChange = () => {
    informationsDisplay
      ? setInformationsDisplay(false)
      : setInformationsDisplay(true);
  };
  const displayDeliveryChange = () => {
    deliveryDisplay ? setDeliveryDisplay(false) : setDeliveryDisplay(true);
  };

  return (
    <footer className={styles.footer}>
      <ul className={informationsDisplay ? styles.clicked : styles.mobileList}>
        <span onClick={displayInformationsChange}>
          Informations
          <CaretDownOutline color="#ffffff" width="1rem" />
        </span>
        <div className={informationsDisplay ? styles.displayed : styles.hidden}>
          <Link to={"/aboutUs"}>
            <li>About us</li>
          </Link>

          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </div>
      </ul>

      <ul className={deliveryDisplay ? styles.clicked : styles.mobileList}>
        <span onClick={displayDeliveryChange}>
          Delivery
          <CaretDownOutline color="#ffffff" width="1rem" />
        </span>
        <div className={deliveryDisplay ? styles.displayed : styles.hidden}>
          <Link to={"/productsPacking"}>
            <li>Products packing</li>
          </Link>

          <Link to={"/prices"}>
            <li>Prices and ways of delivery</li>
          </Link>
        </div>
      </ul>
      <ul className={styles.desktopList}>
        <span>Informations</span>
        <Link to={"/aboutUs"}>
          <li>About us</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
      <ul className={styles.desktopList}>
        <span>Delivery</span>
        <Link to={"/productsPacking"}>
          <li>Products packing</li>
        </Link>
        <Link to={"/prices"}>
          <li>Prices and ways of delivery</li>
        </Link>
      </ul>
      <div className={styles.socials}>
        <Socials src={Facebook} />
        <Socials src={Instagram} />
      </div>
    </footer>
  );
}

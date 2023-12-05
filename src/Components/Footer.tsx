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
      <ul>
        <span onClick={displayInformationsChange}>
          Informations
          <CaretDownOutline color="#ffffff" width="1rem" />
        </span>
        {informationsDisplay && <li>About us</li>}
        {informationsDisplay && (
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        )}
      </ul>

      <ul>
        <span onClick={displayDeliveryChange}>
          Delivery
          <CaretDownOutline color="#ffffff" width="1rem" />
        </span>
        {deliveryDisplay && <li>Products packing</li>}
        {deliveryDisplay && <li>Prices and ways of delivery</li>}
      </ul>
      <div className={styles.socials}>
        <Socials src={Facebook} />
        <Socials src={Instagram} />
      </div>
    </footer>
  );
}

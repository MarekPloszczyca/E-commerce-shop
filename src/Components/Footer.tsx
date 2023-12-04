import styles from "./Footer.module.scss";
import { useState } from "react";
import { CaretDownOutline } from "react-ionicons";

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
      <ul onClick={displayInformationsChange}>
        Informations
        <CaretDownOutline color="#ffffff" width="1rem" />
        {informationsDisplay && <li>About us</li>}
        {informationsDisplay && <li>Contact</li>}
      </ul>

      <ul onClick={displayDeliveryChange}>
        Delivery
        <CaretDownOutline color="#ffffff" width="1rem" />{" "}
        {deliveryDisplay && <li>Products packing</li>}{" "}
        {deliveryDisplay && <li>Prices and ways of delivery</li>}
      </ul>
    </footer>
  );
}
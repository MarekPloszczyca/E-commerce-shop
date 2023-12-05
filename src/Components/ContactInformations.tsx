import styles from "./ContactInformations.module.scss";
import { Fragment } from "react";

export default function ContactInformations() {
  return (
    <Fragment>
      <div className={styles.contactInformations}>
    
        <p>
          <span>Product. sp.z o.o</span>
        </p>
        <p>ul.Inna 54A</p>
        <p>36-952 Kraków</p>
        <p>NIP: 656-65-6565656-554</p>
        <p>tel.:+48 103-404-942</p>
        <p>email: product@product.product</p>
        <p>www: product@product.com</p>
      </div>
      <div className={styles.moreInfo}>
        <p>
          You can call us from <span>9:00 a.m.</span> to <span>6:00 p.m.</span>{" "}
          from <span>Monday</span> to <span>Saturday. </span>
          If you have cooperation offers you can also send us an email, we will
          respond to it within 24 hours maximum.
        </p>
      </div>
    </Fragment>
  );
}

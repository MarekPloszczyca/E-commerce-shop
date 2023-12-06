import styles from "./PricesGrid.module.scss";
import DeliveryLogo from "../Assets/Logo/DeliveryLogo.svg";

export default function PricesGrid() {
  return (
    <div className={styles.pricesInfo}>
      <h6>Delivery prices</h6>
      <div className={styles.pricesGrid}>
        <div></div>
        <div>
          <p><span>parcel locker</span><img src={DeliveryLogo} /></p>
          
        </div>
        <div>
          <p><span>courier delivery</span><img src={DeliveryLogo} /></p>
          
        </div>
        <div>
          <p><span>parcel labelled cash on delivery</span><img src={DeliveryLogo} /></p>
          
        </div>
        <div>
          <p>order <span>below 150 PLN</span></p>
        </div>
        <div>
          <p>10 PLN</p>
        </div>
        <div>
          <p>12 PLN</p>
        </div>
        <div>
          <p>15 PLN</p>
        </div>
        <div>
          <p>order <span>over 150 PLN</span></p>
        </div>
        <div>
          <p>free</p>
        </div>
        <div>
          <p>free</p>
        </div>
        <div>
          <p>free</p>
        </div>
      </div>
    </div>
  );
}

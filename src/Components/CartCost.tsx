import { useState } from "react";
import styles from "./CartCost.module.scss";
import { ChevronForwardOutline } from "react-ionicons";
import { Link } from "react-router-dom";

export default function CartCost(props: {
  total: number;
  reminder: (boolean: boolean) => void;
}) {
  const [rulesAccepted, setRulesAccepted] = useState(false);
  const [accepted, setAccepted] = useState(true);

  const acceptationHandler = () => {
    rulesAccepted ? setRulesAccepted(false) : setRulesAccepted(true);
  };

  return (
    <div className={styles.costContainer}>
      <h3>
        <span>FREE DELIVERY</span> from 150 PLN
      </h3>
      <p>
        {props.total > 150
          ? "Your delivery will be free!"
          : `You need only ${(150 - props.total).toFixed(
              2
            )} PLN to receive it.`}
      </p>
      <div className={styles.cost}>
        <div>
          <p>Order value:</p>
          <p>
            <span>{props.total.toFixed(2)} PLN</span>
          </p>
        </div>
        <div>
          <p>
            {Number(props.total.toFixed(2)) > 150
              ? "Delivery Price:"
              : "Delivery cost from:"}
          </p>
          <p>
            <span>
              {Number(props.total.toFixed(2)) > 150 ? "Free" : "10 PLN"}
            </span>
          </p>
        </div>
      </div>
      <div className={styles.total}>
        <p>Total:</p>
        <p>
          <span>
            {Number(props.total.toFixed(2)) > 150
              ? `${props.total.toFixed(2)}PLN`
              : `${Number(props.total + 10).toFixed(2)}PLN`}
          </span>
        </p>
      </div>
      <div className={styles.confirmation}>
        <input
          type="checkbox"
          id="rules"
          name="rules"
          onClick={() => {
            acceptationHandler();
            props.reminder(false);
            setAccepted(true);
          }}
        />
        
        <label htmlFor="rules">
        <span className={accepted ? styles.checkmark : styles.warning}></span>
          I confirm that placing an order involves an obligation to pay.
        </label>
      </div>
      <div className={styles.checkoutButton}>
        {!rulesAccepted && (
          <button
            onClick={() => {
              props.reminder(true);
              return setAccepted(false);
            }}
          >
            CHECK OUT
            <span>
              <ChevronForwardOutline />
            </span>
            <ChevronForwardOutline />
          </button>
        )}
        {rulesAccepted && (
          <Link to="/" className={styles.link}>
            <button>
              CHECK OUT
              <span>
                <ChevronForwardOutline />
              </span>
              <ChevronForwardOutline />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

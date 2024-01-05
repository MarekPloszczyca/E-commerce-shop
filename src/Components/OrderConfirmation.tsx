import { useEffect, useRef, useState } from "react";
import styles from "./OrderConfirmation.module.scss";
import { CheckmarkDoneCircleOutline } from "react-ionicons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetHandler } from "./Cart/Cart";

let interval: number;

export default function OrderConfirmation() {
  const cart = useSelector((state: { products: [] }) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [timer, setTimer] = useState(10);
  const [orderNumber, setOrderNumber] = useState(0);
  const firstLoad = useRef(true);

  useEffect(() => {
    if (timer < 0) {
      dispatch(resetHandler());
      clearInterval(interval);
      return navigate("/");
    }
    if (!firstLoad.current) {
      return;
    }
    setOrderNumber(Math.floor(Math.random() * 10000));
    interval = setInterval(() => {
      setTimer((current) => current - 1);
    }, 1000);
    firstLoad.current = false;
  }, [timer, navigate, cart, dispatch]);

  return (
    <div className={styles.confirmation}>
      <h5>Your products have been successfully ordered</h5>
      <CheckmarkDoneCircleOutline beat />
      <p>{`Your order number is #${orderNumber}`}</p>
      <p className={styles.goBack}>
        You will be redirected to{" "}
        <span
          onClick={() => {
            dispatch(resetHandler());
            clearInterval(interval);
            navigate("/");
          }}
        >
          main page
        </span>{" "}
        in {timer} {timer === 1 ? `second` : `seconds`}
      </p>
    </div>
  );
}

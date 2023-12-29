import styles from "./SingleProduct.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { StarOutline } from "react-ionicons";
import { Star } from "react-ionicons";
import AddButton from "./AddButton";

interface Props {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  number: string;
  count: string;
}

export default function SingleProduct(props: Props) {
  const [rating, setRating] = useState<JSX.Element[]>([]);
  const [count, setCount] = useState("1");

  useEffect(() => {
    if (rating.length > 0) {
      return;
    }
    const number = Math.round(Number(props.number));
    const starsArray = [];
    for (let i = 0; i < number; i++) {
      starsArray.push(<Star color={"red"} key={i} />);
    }
    while (starsArray.length < 5) {
      starsArray.push(<StarOutline key={Math.random()} />);
    }
    setRating(starsArray);
  }, [props, rating.length]);

  return (
    <div className={styles.productContainer}>
      <img src={props.image} alt="Product Image" />
      <div className={styles.infoContainer}>
        <SectionHeader text={props.title} />
        <p>{props.description}</p>
        <p className={styles.price}>{Math.round(Number(props.price))},99 PLN</p>
        <Link to={"/Prices"}>
          <p className={styles.link}>Check delivery prices</p>
        </Link>
        <div className={styles.rating}>
          <p>
            Rating: <span>{rating}</span>
          </p>
          <p>Rating count: {props.count}</p>
        </div>
        <div className={styles.itemCount}>
          <button
            onClick={() => {
              if (Number(count) <= 1) {
                return;
              }
              setCount((current) => {
                return (Number(current) - 1).toString();
              });
            }}
          >
            -
          </button>
          <input
            name="count"
            value={count}
            type="number"
            min="1"
            max="100"
            onChange={(event) => {
              setCount(event.target.value);
            }}
            onBlur={() => {
              if (Number(count) < 1) {
                return setCount("1");
              }
              if (Number(count) > 99) {
                return setCount("99");
              }
            }}
            onClick={() => {
              setCount("");
            }}
          ></input>
          <button
            onClick={() => {
              if (Number(count) >= 99) {
                return;
              }
              setCount((current) => {
                return (Number(current) + 1).toString();
              });
            }}
          >
            +
          </button>
        </div>
        <div className={styles.cartButton}>
          <AddButton
            product={{
              id: props.id,
              img: props.image,
              title: props.title,
              price: `${Math.floor(Number(props.price))},99 PLN`,
            }}
            quantity={Number(count)}
          />
        </div>
      </div>
    </div>
  );
}

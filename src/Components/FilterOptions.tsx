/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from "react";
import styles from "./FilterOptions.module.scss";
import SingleFilterOption from "./SingleFilterOption.tsx";

const price = [
  { value: "asc", label: "Ascending" },
  { value: "desc", label: "Descending" },
];
const name = [
  { value: "a-z", label: "A-Z" },
  { value: "z-a", label: "Z-A" },
];
const rating = [
  { value: "asc", label: "Ascending" },
  { value: "desc", label: "Descending" },
];

interface Props {
  clothing: boolean;
  filter: (e: any, title: string) => void;
}

export default function FilterOptions(props: Props) {
  const [priceValue, setPriceValue] = useState<string | undefined>("");
  const [nameValue, setNameValue] = useState<string | undefined>("");
  const [ratingValue, setRatingValue] = useState<string | undefined>("");

  const resetValues = () => {
    setPriceValue("");
    setNameValue("");
    setRatingValue("");
  };

  const valueHandler = (title: string, type: string | undefined) => {
    resetValues();
    switch (title) {
      case "Price":
        return setPriceValue(type);
      case "Name":
        return setNameValue(type);
      case "Rating":
        return setRatingValue(type);
    }
  };

  return (
    <Fragment>
      {props.clothing ? (
        <div className={styles.radio}>
          <input
            type="radio"
            id="all"
            name="gender"
            value="all"
            defaultChecked
          />
          <label htmlFor="all">All</label>
          <input type="radio" id="men" name="gender" value="men" />
          <label htmlFor="men">Men</label>
          <input type="radio" id="women" name="gender" value="women" />
          <label htmlFor="women">Women</label>
        </div>
      ) : null}
      <form className={styles.container}>
        <SingleFilterOption
          title="Price"
          options={price}
          filter={props.filter}
          value={priceValue}
          valueChange={valueHandler}
        />
        <SingleFilterOption
          title="Name"
          options={name}
          filter={props.filter}
          value={nameValue}
          valueChange={valueHandler}
        />
        <SingleFilterOption
          title="Rating"
          options={rating}
          filter={props.filter}
          value={ratingValue}
          valueChange={valueHandler}
        ></SingleFilterOption>
      </form>
    </Fragment>
  );
}

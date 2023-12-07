/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./NavigationOptions.module.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CaretForwardOutline } from "react-ionicons";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  categories: boolean;
  displayHandler: () => void;
  stateFunction: Dispatch<SetStateAction<boolean>>;
  itemsArray: { description: string; urlCategory: string; urlId: string }[];
  urlId?: string;
}

export default function NavigationOptions(props: Props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length === 0) {
      const itemsArray: any = props.itemsArray.map((item) => {
        return (
          <Link
            key={item.description}
            to={`/${item.urlCategory}/${item.urlId}`}
          >
            <li>{item.description}</li>
          </Link>
        );
      });

      setItems(itemsArray);
    }
  }, [props, items.length]);

  return (
    <ul className={styles.list}>
      <p
        className={props.categories ? styles.clicked : undefined}
        onClick={() => {
          props.displayHandler();
        }}
      >
        {props.title}
        <CaretForwardOutline />
      </p>
      <div
        className={
          props.categories
            ? styles.categoriesContainer
            : styles.categoriesContainerHidden
        }
      >
        {items}
      </div>
    </ul>
  );
}

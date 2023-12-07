import styles from "./NavigationOptions.module.scss";
import { Dispatch, SetStateAction } from "react";
import { CaretForwardOutline } from "react-ionicons";

interface Props {
  categories: boolean;
  displayHandler: () => void;
  stateFunction: Dispatch<SetStateAction<boolean>>;
}

export default function NavigationOptions(props: Props) {
  return (
    <ul>
      <p
        className={props.categories ? styles.clicked : undefined}
        onClick={() => {
          props.displayHandler();
        }}
      >
        Products
        <CaretForwardOutline />
      </p>
      <div
        className={
          props.categories
            ? styles.categoriesContainer
            : styles.categoriesContainerHidden
        }
      >
        <li>Women's clothing</li>
        <li>Men's clothing</li>
        <li>Jewellery</li>
        <li>Electronics</li>
      </div>
    </ul>
  );
}

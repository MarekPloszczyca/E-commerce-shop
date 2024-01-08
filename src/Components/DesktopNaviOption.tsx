import { Link } from "react-router-dom";
import styles from "./DesktopNaviOption.module.scss";
import { CaretDownOutline } from "react-ionicons";
import { useState } from "react";

interface Props {
  title: string;
  items: {
    urlCategory: string;
    urlId: string;
    description: string;
  }[];
  categories?: boolean;
}

export default function DesktopNaviOption(props: Props) {
  const [display, setDisplay] = useState(false);

  return (
    <ul
      className={styles.container}
      onMouseEnter={() => {
        setDisplay(true);
      }}
      onMouseLeave={() => {
        setDisplay(false);
      }}
    >
      <p>
        {props.title} <CaretDownOutline />
      </p>
      <div
        className={
          display
            ? props.categories
              ? styles.categories
              : styles.shown
            : styles.hidden
        }
      >
        {props.items.map((item) => {
          return (
        
            <Link key={item.description} to={`/${item.urlCategory}/${item.urlId}`}>
              <li>{item.description}</li>
            </Link>
          );
        })}
      </div>
    </ul>
  );
}

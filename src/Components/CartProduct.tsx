import styles from "./CartProduct.module.scss";
import { useDispatch } from "react-redux";
import { add, remove, deleteHandler } from "./Cart/Cart";
import {
  CaretDownOutline,
  CloseOutline,
  AddOutline,
  RemoveOutline,
} from "react-ionicons";
import { Fragment, useState } from "react";
interface Props {
  image: string;
  title: string;
  quantity: number;
  price: string;
  id: number;
}

export default function CartProduct(props: Props) {
  const [quantityOptions, setQuantityOptions] = useState(false);
  const dispatch = useDispatch();

  const optionsHandler = () => {
    quantityOptions ? setQuantityOptions(false) : setQuantityOptions(true);
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <img src={props.image}></img>
        <div className={styles.description}>
          <p className={styles.title}>{props.title}</p>
          <p>
            <span>{props.price}</span>
          </p>
        </div>
        <input value={props.quantity} readOnly></input>
        <div className={quantityOptions ? styles.clicked : styles.icon}>
          <CaretDownOutline
            color="#255841"
            width="1rem"
            onClick={optionsHandler}
          />
        </div>
      </div>
      {quantityOptions && (
        <div className={styles.options}>
          <div className={styles.delete}>
            <button
              onClick={() => {
                dispatch(deleteHandler(props.id));
              }}
            >
              <CloseOutline />
            </button>
            <p>Delete from cart</p>
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(remove(props.id));
              }}
            >
              <RemoveOutline />
            </button>
            <button
              onClick={() => {
                dispatch(
                  add({
                    id: props.id,
                    img: props.image,
                    title: props.title,
                    price: `${Math.floor(Number(props.price))},99 PLN`,
                    quantity: 1,
                  })
                );
              }}
            >
              <AddOutline />
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

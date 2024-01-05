import { useEffect, useState } from "react";
import styles from "./CheckoutProducts.module.scss";
import SingleCheckoutProduct from "./SingleCheckoutProduct";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CheckoutProducts(props: { loading: boolean }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState<JSX.Element[]>([]);
  const [productsNumber, setProductsNumber] = useState(0);
  const [productsPrice, setProductsPrice] = useState(0);
  const [discount, setDiscount] = useState("");
  const [validate, setValidate] = useState(true);
  const cart = useSelector((state: { products: [] }) => state.products);

  useEffect(() => {
    if (cart.length === 0) {
      return navigate("/");
    }
    const productsArray = cart.map(
      (product: {
        id: number;
        img: string;
        title: string;
        quantity: number;
        price: string;
      }) => {
        return (
          <SingleCheckoutProduct
            key={product.id}
            src={product.img}
            title={product.title}
            quantity={product.quantity}
            price={product.price}
          />
        );
      }
    );
    setProducts(productsArray);
  }, [cart, navigate]);

  useEffect(() => {
    let number = 0;
    let price = 0;
    if (products.length === 0) {
      return;
    }
    for (const product of products) {
      number += product.props.quantity;
      price +=
        Number(
          product.props.price
            .split(" ")
            .splice(0, 1)
            .toString()
            .replace(",", ".")
        ) * product.props.quantity;
    }
    setProductsNumber(number);
    setProductsPrice(price);
  }, [products]);

  return (
    <div className={styles.checkoutProducts}>
      <h5>{`Order summary (${productsNumber})`}</h5>
      {products}
      <div className={styles.discount}>
        <input
          type="text"
          placeholder="Discount code"
          value={discount}
          onClick={() => {
            setValidate(true);
          }}
          onChange={(event) => {
            setDiscount(event.target.value);
          }}
        />

        <button
          className={discount !== "" ? styles.discountButton : undefined}
          type="button"
          onClick={() => {
            if (discount === "") {
              return;
            }
            setValidate(false);
            setDiscount("");
          }}
        >
          Apply
        </button>
      </div>
      {!validate && <span>Please enter a valid discount code</span>}
      <div className={styles.total}>
        <p>Total:</p>{" "}
        <p>{`${
          productsPrice < 150
            ? (productsPrice + 10).toFixed(2)
            : productsPrice.toFixed(2)
        } PLN`}</p>
        <span className={styles.deliveryPrice}>
          {productsPrice < 150 && `(Including 10 PLN delivery price)`}
        </span>
      </div>
      <button type="submit">
        {props.loading ? <div className={styles.load}></div> : `Order`}
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";
import styles from "./CheckoutProducts.module.scss";
import SingleCheckoutProduct from "./SingleCheckoutProduct";
import { useSelector } from "react-redux";

export default function CheckoutProducts() {
  const [products, setProducts] = useState<JSX.Element[]>([]);
  const [productsNumber, setProductsNumber] = useState(0);
  const [discount, setDiscount] = useState("");
  const [validate, setValidate] = useState(true);
  const cart = useSelector((state: { products: [] }) => state.products);

  useEffect(() => {
    if (cart.length === 0) {
      return;
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
  }, [cart]);

  useEffect(() => {
    let number = 0;
    if (products.length === 0) {
      return;
    }
    for (const product of products) {
      number += product.props.quantity;
    }
    setProductsNumber(number);
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
        <p>Total:</p> <p>123 PLN</p>
      </div>
    </div>
  );
}

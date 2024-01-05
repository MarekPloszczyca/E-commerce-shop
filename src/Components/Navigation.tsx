import styles from "./Navigation.module.scss";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import NavigationOptions from "./NavigationOptions";
import { CartOutline } from "react-ionicons";
import { useEffect, useRef, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { InformationCircleOutline } from "react-ionicons";
import NavigationCart from "./NavigationCart";

const menuOptions = {
  category: {
    title: "Products",
    options: [
      {
        description: "Women's clothing",
        urlCategory: "products/category",
        urlId: "women's clothing",
      },
      {
        description: "Men's clothing",
        urlCategory: "products/category",
        urlId: "men's clothing",
      },
      {
        description: "Jewellery",
        urlCategory: "products/category",
        urlId: "jewelery",
      },
      {
        description: "Electronics",
        urlCategory: "products/category",
        urlId: "electronics",
      },
    ],
  },
  informations: {
    title: "About us",
    options: [
      { description: "About Us", urlCategory: "aboutUs", urlId: "" },
      { description: "Contact", urlCategory: "contact", urlId: "" },
    ],
  },
  delivery: {
    title: "Delivery",
    options: [
      {
        description: "Products packing",
        urlCategory: "productsPacking",
        urlId: "",
      },
      {
        description: "Prices and ways of delivery",
        urlCategory: "prices",
        urlId: "",
      },
    ],
  },
};

export default function Navigation(props: {
  visible?: boolean;
  confirmed?: boolean;
}) {
  const cart = useSelector((state: { products: [] }) => state.products);
  const [display, setDisplay] = useState(false);
  const [categories, setCategories] = useState(false);
  const [informations, setInformations] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [added, setAdded] = useState(false);
  const userCart = useRef([]);
  const [loaded, setLoaded] = useState(false);
  const [cartShown, setCartShown] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!loaded) {
      userCart.current = cart;
      return setLoaded(true);
    }
    if (JSON.stringify(cart) === JSON.stringify(userCart.current)) {
      return;
    }
    if (JSON.stringify(cart) !== JSON.stringify(userCart.current)) {
      userCart.current = cart;
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
      }, 1000);
    }
  }, [cart, userCart, loaded]);

  const displayHandler = (
    state: boolean,
    func: Dispatch<SetStateAction<boolean>>
  ) => {
    state ? func(false) : func(true);
  };

  return (
    <nav className={props.confirmed ? styles.blur : styles.nav}>
      <div className={styles.upperNav}>
        <MenuIcon
          menuAnimationHandler={() => {
            if (cartShown) {
              displayHandler(cartShown, setCartShown);
              return setTimeout(() => {
                displayHandler(display, setDisplay);
                displayHandler(clicked, setClicked);
              }, 500);
            }
            displayHandler(display, setDisplay);
            displayHandler(clicked, setClicked);
          }}
          clicked={clicked}
        />
        <Logo />

        <div
          onClick={() => {
            if (display) {
              displayHandler(clicked, setClicked);
              displayHandler(display, setDisplay);
              return setTimeout(() => {
                displayHandler(cartShown, setCartShown);
              }, 500);
            }
            displayHandler(cartShown, setCartShown);
          }}
          className={props.visible ? styles.hidden : undefined}
        >
          <div className={added ? styles.animatedCart : styles.cartIcon}>
            <CartOutline />
          </div>
        </div>
      </div>
      <div className={display ? styles.shownNav : styles.hiddenNav}>
        <NavigationOptions
          title={menuOptions.category.title}
          itemsArray={menuOptions.category.options}
          categories={categories}
          displayHandler={() => {
            displayHandler(categories, setCategories);
          }}
          stateFunction={setCategories}
        />

        <NavigationOptions
          title={menuOptions.delivery.title}
          itemsArray={menuOptions.delivery.options}
          categories={delivery}
          displayHandler={() => {
            displayHandler(delivery, setDelivery);
          }}
          stateFunction={setDelivery}
        />
        <NavigationOptions
          title={menuOptions.informations.title}
          itemsArray={menuOptions.informations.options}
          categories={informations}
          displayHandler={() => {
            displayHandler(informations, setInformations);
          }}
          stateFunction={setInformations}
        />
      </div>
      <div className={!added ? styles.addInformation : styles.visible}>
        <InformationCircleOutline color={"#ffffff"} />
        Successfully added to cart
      </div>
      <NavigationCart shown={cartShown} />
    </nav>
  );
}

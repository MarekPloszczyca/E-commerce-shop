import styles from "./Navigation.module.scss";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import NavigationOptions from "./NavigationOptions";
import NavigationCart from "./NavigationCart";
import DesktopNavigation from "./DesktopNavigation";
import { CartOutline } from "react-ionicons";
import { useEffect, useRef, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from "@uidotdev/usehooks";
import { InformationCircleOutline } from "react-ionicons";

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
  const device = useWindowSize();
  const menuButton = useRef(null);

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

  useEffect(() => {
    if (device) {
      setCartShown(false);
      setDisplay(false);
      setClicked(false);
    }
  }, [device]);

  useEffect(() => {
    const closingHandler = (event: MouseEvent | TouchEvent) => {
      if (menuButton.current && !menuButton.current.contains(event.target)) {
        setCartShown(false);
        setDisplay(false);
        setClicked(false);
      }
    };
    document.addEventListener("click", closingHandler, true);
    document.addEventListener("touchstart", closingHandler, true);
    return () => document.removeEventListener("click", closingHandler, true);
  }, []);

  const displayHandler = (
    state: boolean,
    func: Dispatch<SetStateAction<boolean>>
  ) => {
    state ? func(false) : func(true);
  };

  return (
    <nav
      ref={menuButton}
      className={props.confirmed ? styles.blur : styles.nav}
    >
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

        <div className={styles.desktop}>
          <Logo />
          <DesktopNavigation menuOptions={menuOptions} />
        </div>
        <div
          onMouseOver={() => {
            if (device.width < 1024) {
              return;
            }
            if (display) {
              setClicked(false);
              setCategories(false);
              return setTimeout(() => {
                setCartShown(true);
              }, 500);
            }
            setCartShown(true);
            setClicked(false);
            setCategories(false);
          }}
          onMouseOut={() => {
            if (device.width < 1024) {
              return;
            }
            setCartShown(false);
            setClicked(false);
            setCategories(false);
          }}
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
      <NavigationCart
        shown={cartShown}
        mouseEnter={() => {
          setCartShown(true);
          setClicked(false);
          setCategories(false);
        }}
        mouseLeave={() => {
          setCartShown(false);
          setClicked(false);
          setCategories(false);
        }}
      />
    </nav>
  );
}

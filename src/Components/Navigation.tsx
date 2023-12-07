import styles from "./Navigation.module.scss";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import { CartOutline } from "react-ionicons";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import NavigationOptions from "./NavigationOptions";

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

export default function Navigation() {
  const [display, setDisplay] = useState(false);
  const [categories, setCategories] = useState(false);
  const [informations, setInformations] = useState(false);
  const [delivery, setDelivery] = useState(false);

  const displayHandler = (
    state: boolean,
    func: Dispatch<SetStateAction<boolean>>
  ) => {
    state ? func(false) : func(true);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.upperNav}>
        <MenuIcon
          menu={() => {
            displayHandler(display, setDisplay);
          }}
        />
        <Logo />
        <div className={styles.cartIcon}><CartOutline /></div>
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
    </nav>
  );
}

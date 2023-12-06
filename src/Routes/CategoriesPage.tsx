import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";

export default function CategoriesPage() {
  return (
    <Fragment>
      <Navigation />
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}

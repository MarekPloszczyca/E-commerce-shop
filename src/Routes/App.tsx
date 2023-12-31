import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import SlidesContainer from "../Components/SlidesContainer";
import BriefInfo from "../Components/BriefInfo";
import CategoriesGallery from "../Components/CategoriesGallery";
import PopularProducts from "../Components/PopularProducts";
import About from "../Components/About";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import Reviews from "../Components/Reviews";

function App() {
  return (
    <Fragment>
      <Navigation />
      <SlidesContainer />
      <BriefInfo />
      <CategoriesGallery />
      <PopularProducts />
      <About />
      <Reviews />
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}

export default App;

import "./App.module.scss";
import { Fragment } from "react";
import Navigation from "./Components/Navigation";
import SlidesContainer from "./Components/SlidesContainer";
import BriefInfo from "./Components/BriefInfo";
import CategoriesGallery from "./Components/CategoriesGallery";

function App() {
  return (
    <Fragment>
      <Navigation />
      <SlidesContainer />
      <BriefInfo />
      <CategoriesGallery />
    </Fragment>
  );
}

export default App;

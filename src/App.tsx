import "./App.module.scss";
import { Fragment } from "react";
import Navigation from "./Components/Navigation";
import SlidesContainer from "./Components/SlidesContainer";
import BriefInfo from "./Components/BriefInfo";

function App() {
  return (
    <Fragment>
      <Navigation />
      <SlidesContainer />
      <BriefInfo/>
    </Fragment>
  );
}

export default App;

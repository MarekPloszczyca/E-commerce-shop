import styles from "./About.module.scss";
import storeImage from "../Assets/About/AboutImage.jpg";

export default function About() {
  return (
    <div className={styles.aboutContainer}> 
      <img src={storeImage} alt="Store" />
      <h2>It all started here...</h2>
      <p>We were a small store on the suburbs of Cracow. Local collections and unique designs made people start coming and asking not only for clothes, but also for jewelry. After 2 years, we have decided to close our stationary store and open brand new e-commerce shop, where customers can find everything they want at reasonable prices.</p>
      <p>And now, we are bigger than ever...</p>
    </div>
  );
}

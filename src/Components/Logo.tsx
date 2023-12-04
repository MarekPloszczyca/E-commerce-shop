import styles from "./Logo.module.scss";
import LogoIcon from "../Assets/Logo/Logo.svg";

export default function Logo() {
    return <img src={LogoIcon} alt="Shop Logo" className={styles.logo}/>
}
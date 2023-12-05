import styles from "./Logo.module.scss";
import LogoIcon from "../Assets/Logo/Logo.svg";
import {Link} from "react-router-dom";

export default function Logo() {
    return <Link to={"/"}><img src={LogoIcon} alt="Shop Logo" className={styles.logo}/></Link>
}
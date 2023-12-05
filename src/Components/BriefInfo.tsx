import styles from "./BriefInfo.module.scss";
import { TrophyOutline } from "react-ionicons";
import { CashOutline } from "react-ionicons";
import { TimeOutline } from 'react-ionicons';
import { StarOutline } from 'react-ionicons';
import { GiftOutline } from 'react-ionicons';
import { BrushOutline } from 'react-ionicons'

import SingleInfo from "./SingleInfo";

export default function BriefInfo() {
  return (
    <div className={styles.outerContainer}><div className={styles.container}>
      <SingleInfo icon={<TrophyOutline/>} span="The number one" text=" online shop in Cracow"/>
      <SingleInfo icon={<CashOutline/>} span="Free delivery" text=" from 150 PLN"/>
      <SingleInfo icon={<TimeOutline/>} span="Delivery" text=" in 48h"/>
      <div className={styles.additionalInfo}><SingleInfo icon={<StarOutline/>} span="The best" text=" quality of products"/></div>
      <div className={styles.additionalInfo}><SingleInfo icon={<GiftOutline/>} span="Great" text=" gift idea"/></div>
      <div className={styles.additionalInfo}><SingleInfo icon={<BrushOutline/>} span="Original" text=" design"/></div>
    </div></div>
  );
}

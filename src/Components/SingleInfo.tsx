import styles from "./SingleInfo.module.scss";

interface Props{
// eslint-disable-next-line @typescript-eslint/no-explicit-any
icon:any;
span:string;
text:string;
}

export default function SingleInfo(props:Props) {
  return (
    <div className={styles.info}>
     {props.icon}
      <p className={styles.text}><span>{props.span}</span>{props.text}</p>
    </div>
  );
}

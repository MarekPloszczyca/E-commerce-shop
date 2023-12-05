import styles from "./AboutSection.module.scss";

interface Props{
    src:string,
    text:string
}

export default function AboutSection(props:Props) {
  return (
    <div className={styles.aboutSection}>
      <img src={props.src}/>
      <p>{props.text}</p>
    </div>
  );
}

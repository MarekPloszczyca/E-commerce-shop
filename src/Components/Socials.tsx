import styles from "./Socials.module.scss";

interface Props {
  src: string;
}

export default function Socials(props: Props) {
  return (
    <div className={styles.socials} tabIndex={0}>
      <img src={props.src} />
    </div>
  );
}

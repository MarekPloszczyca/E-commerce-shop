/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./FormInput.module.scss";

interface Props {
  text: string;
  name: string;
  type: string;
  onChange: any;
  value: string;
  onBlur: any;
  touched?: boolean;
  error?: string;
}

export default function FormInput(props: Props) {
  return (
    <div className={props.value !== "" ? styles.resized : styles.container}>
      <input
        className={styles.input}
        placeholder={props.text}
        id={props.name}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
      />
      <span className={styles.description}>
        {props.value !== "" ? props.text : ""}
      </span>
      {props.touched && props.error ? (
        <span
          className={
            props.name === "email" &&
            props.value.length > window.innerWidth / 28
              ? styles.emailWarning
              : styles.warning
          }
        >
          {props.error}
        </span>
      ) : null}
    </div>
  );
}

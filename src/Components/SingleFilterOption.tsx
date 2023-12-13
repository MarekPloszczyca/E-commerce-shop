/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./SingleFilterOption.module.scss";
import Select from "react-select";

interface Props {
  title: string;
  options: { value: string; label: string }[];
  filter: (e: any, title:string) => void;
}

export default function SingleFilterOption(props: Props) {
  return (
    <div className={styles.singleOption}>
      <span>{props.title}</span>
      <div className={styles.select}>
        <Select
          options={props.options}
          placeholder={props.title}
          isSearchable={false}
          onChange={(choice) => {
            return props.filter(choice, props.title);
          }}
        />
      </div>
    </div>
  );
}

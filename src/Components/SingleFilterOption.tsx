import styles from "./SingleFilterOption.module.scss";
import Select from "react-select";

interface Props {
  title: string;
  options: { value: string; label: string }[];
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
        />
      </div>
    </div>
  );
}

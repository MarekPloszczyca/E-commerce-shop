import styles from "./FilterOptions.module.scss";
import SingleFilterOption from "./SingleFilterOption.tsx";

const price = [
  { value: "asc", label: "Ascending" },
  { value: "desc", label: "Descending" },
];
const name = [
  { value: "a-z", label: "A-Z" },
  { value: "z-a", label: "Z-A" },
];

export default function FilterOptions() {
  return (
    <div className={styles.container}>
      <SingleFilterOption title="Price" options={price} />
      <SingleFilterOption title="Name" options={name} />
    
    </div>
  );
}

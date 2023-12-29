import styles from "./Reminder.module.scss";
import { AlertOutline } from 'react-ionicons'


export default function Reminder() {
  return (
    <div className={styles.reminder}>
      <AlertOutline />
      <p>
        You have to confirm that placing an order involves an obligation to pay.
      </p>
    </div>
  );
}

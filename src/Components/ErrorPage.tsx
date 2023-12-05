import styles from "./ErrorPage.module.scss";
import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import Navigation from "./Navigation";

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();

  return (
    <Fragment>
      <Navigation />
      <div className={styles.errorPage}>
        <h1>Oh no!</h1>
        <p>Something went wrong</p>
        <p>{error.statusText || error.message}</p>
      </div>
    </Fragment>
  );
}

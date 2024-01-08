import styles from "./DesktopNavigation.module.scss";
import DesktopNaviOption from "./DesktopNaviOption";

type NaviOption = {
  title: string;
  options: {
    description: string;
    urlCategory: string;
    urlId: string;
  }[];
};

interface Props {
  menuOptions: {
    category: NaviOption;
    informations: NaviOption;
    delivery: NaviOption;
  };
}

export default function DesktopNavigation(props: Props) {
  return (
    <div className={styles.container}>
      <DesktopNaviOption
        title={props.menuOptions.category.title}
        items={props.menuOptions.category.options}
        categories
      />

      <DesktopNaviOption
        title={props.menuOptions.delivery.title}
        items={props.menuOptions.delivery.options}
      />

      <DesktopNaviOption
        title={props.menuOptions.informations.title}
        items={props.menuOptions.informations.options}
      />
    </div>
  );
}

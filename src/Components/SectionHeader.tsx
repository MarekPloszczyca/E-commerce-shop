import styles from "./SectionHeader.module.scss";


export default function SectionHeader(props:{text:string}){
    return <h1 className={styles.header}>{props.text}</h1>
}
import styles from "./index.module.scss";

interface Props {
  text: string;
}

const ButtonC = ({ text }: Props) => {
  return <button className={styles.buttonC}>{text}</button>;
};

export default ButtonC;

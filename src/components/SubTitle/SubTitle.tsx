import styles from "./index.module.scss";

interface Props {
  text: string;
  color?: string;

 
}

const SubTitle = ({ text, color }: Props) => {
  return (
    <p className={styles.subtitle} style={{ color: color ? color : "",  }}>
      {text}
    </p>
  );
};

export default SubTitle;

import styles from "./index.module.scss";

interface decor {
  height?: number;
  width?: number;
}

const DecorLine = ({ height,width }: decor) => {
  return (
    <div className={styles.decor} style={{ height: height ? height : "", width: width ? width:''}} />
  );
};

export default DecorLine;

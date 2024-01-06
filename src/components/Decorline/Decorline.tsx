import styles from "./index.module.scss";

interface decor {
  height?: number;
}

const Decorline = ({ height }: decor) => {
  return <div className={styles.decor} style={{ height: height?height:"" }} />;
};

export default Decorline;

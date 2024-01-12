import ProgressBar from "@ramonak/react-progress-bar";
import styles from "./index.module.scss";
import { useWidth } from "../../hooks/useWidth";



interface Props{
    description:string;
    completed:number;
}

const ProgressBarC = ({description,completed}:Props) => {

    const {width}=useWidth()
  return (
    <div className={styles.barWrap}>
      <div className={styles.labels}>
        <span className={styles.label}>{description}</span>

        <span className={styles.percent}>{`${completed}%`}</span>
      </div>
      <ProgressBar
        bgColor="#363838"
        completed={completed}
        width={width>1024?"600px":"350px"}
        height="2px"
        maxCompleted={100}
        baseBgColor="#FFF"
        isLabelVisible={true}
        labelClassName="label"
        borderRadius="4px"
      />
    </div>
  );
};

export default ProgressBarC;

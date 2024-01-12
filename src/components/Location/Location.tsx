import styles from "./index.module.scss";
import { useLocation } from "react-router-dom";

const Location = () => {
  const location = useLocation();
  return (
    <div
      className={styles.location}
      style={{
        backgroundColor:
          location.pathname === "/desire/About" ||
          location.pathname === "/desire/Contact"
            ? ""
            : "#dfdfdf",
      }}
    >
      <div className={styles.pathContainer}>
        <p>{location.pathname}</p>
      </div>
    </div>
  );
};

export default Location;

import "./index.scss";
import AppRoutes from "./AppRoutes";
import { HashRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;

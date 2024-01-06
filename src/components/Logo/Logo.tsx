import { Link } from "react-router-dom";
import { headerLogo } from "../../images";

const Logo = () => {
  return (
    <Link to="/">
      <img src={headerLogo} alt="Logo" />
    </Link>
  );
};

export default Logo;

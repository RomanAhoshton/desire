import styles from "./index.module.scss";
import { menuLinks } from "../../constants";
import Container from "../Container";
import { Link,useLocation } from "react-router-dom";
import { useWidth } from "../../hooks/useWidth";
import Logo from "../Logo";
import Burger from "../Burger";
import { useState } from "react";
import Cart from "../Cart";

const Header = () => {
  const { width } = useWidth();
  const [toggleMenu, setToggleMenu] = useState(false);
  const location=useLocation()

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.contentHeader}>
          {width < 768 ? <Logo /> : null}

          <nav className={styles.navigation}>
            <ul className={toggleMenu ? styles.activeLinks : styles.menuLinks}>
              {menuLinks.map((item,index) => (
                <li onClick={() => setToggleMenu(false)} key={index}>
                  <Link to={item.href} className={location.pathname===item.href?styles.active:styles.link}>{item.name}</Link>
                  {item.logo ? (
                    <Link to={item.href}>
                      <img src={item.logo} alt="Logo" />
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <Cart />
          {width < 768 ? (
            <Burger toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          ) : null}
        </div>
      </Container>
    </header>
  );
};

export default Header;

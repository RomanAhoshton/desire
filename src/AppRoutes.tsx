import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { HOME, GALLERY, ABOUT, CONTACT,CART } from "./constants/routes";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";


const AppRoutes: FC = () => {
  // use for future auth
  //   const isAuthenticated = useSelector(
  //     (state: RootState) => state.auth.isAuthenticated
  //   );
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     const getUser = localStorage.getItem("user");
  //     if (getUser) {
  //       dispatch(setAuth(true));
  //     }
  //   }, [isAuthenticated]);

  return (
    <Layout>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={GALLERY} element={<Gallery />} />
        <Route path={CONTACT} element={<Contact />} />
        <Route path={CART} element={<Cart />} />
      </Routes>
    </Layout>
  );
};

export default memo(AppRoutes);

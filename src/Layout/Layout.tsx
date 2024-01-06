import { ReactNode } from "react";
import style from "./index.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";



interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {

  return (
    <div className={style.layout}>
      <Header/>
      <main style={{flex:1}}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
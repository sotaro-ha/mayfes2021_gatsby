import React from "react";
import * as Styles from "./header.module.scss";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Menu from "../components/hamburger";

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.pc_header}>
        <div className={Styles.header_nav}>
          <h1 className={Styles.header_title}>
            <Link to={"/"}>
              <StaticImage
                src="../images/general/Logo_Header_PC.svg"
                alt="Logo"
                className={Styles.header_logo}
              />
            </Link>
          </h1>
          
          <ul className={Styles.header_navCont}>
            <li className={Styles.header_naviItem} className={Styles.green}>
            <Link to={"/labcafe/"}>labcafe</Link>
            </li>
            <li className={Styles.header_naviItem} className={Styles.green}>
              <Link to={"/learn/"}>紙を知る</Link>
            </li>
            <li className={Styles.header_naviItem} className={Styles.yellow}>
              <Link to={"/touch/"}>紙に触れる</Link>
            </li>
            <li className={Styles.header_naviItem} className={Styles.red}>
              <Link to={"/enjoy/"}>紙を楽しむ</Link>
            </li>
          </ul>
        </div>
      </div>
      <h1 className={Styles.mobile_title}>
        <div className={Styles.mobile_title_logo}>
            <Link to={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.67 51" style={{height: '50px'}}><defs><style>{".cls-1{fill:#e3e3e2;}"}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Photos"><path class="cls-1" d="M11.83,9.79H5.35V15.2H0v6.49H5.35V27h6.48V21.69h5.35V15.2H11.83ZM40,0a17.78,17.78,0,0,0,0,35.56h.9L31.12,51H40L54.36,28.11A17.78,17.78,0,0,0,40,0Zm0,28.05A10.27,10.27,0,1,1,50.16,17.78,10.26,10.26,0,0,1,40,28.05Z"/></g></g></svg>
            </Link>
            </div>
          </h1>
      <Menu width={300} right />
    </header>
  );
};

export default Header;

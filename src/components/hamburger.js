import React from "react";
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu";
import "../components/styles/global.scss"

export default props => {
  return (
    <Menu {...props}>
      <Link to="/labcafe" className="menu-item" >
      Labcafe
      </Link>

      <Link to="/learn" className="menu-item" >
      紙を知る
        </Link>

        <Link to="/touch" className="menu-item" >
        紙に触れる
        </Link>

        <Link to="/enjoy" className="menu-item" >
        紙を楽しむ
        </Link>
        
    </Menu >

    
  );
};
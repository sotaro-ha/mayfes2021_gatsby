import React from 'react'
import * as Styles from "./header.module.scss"
import { Link } from 'gatsby'
import {StaticImage} from "gatsby-plugin-image"
import Menu from "../components/hamburger";

const Header = () => {
    return (
        <header className={Styles.header}>
        <div className={Styles.pc_header}>
            <div className={Styles.header_nav}>
                <h1 className={Styles.header_title}>
                    <Link to={"/"}><StaticImage src="../images/general/Logo_Header_PC.svg" width={200} alt="" / ></Link>
                </h1>
                <h1 className={Styles.mobile_title}>
                    <Link to={"/"}><StaticImage src="../images/general/Logo_Header_Mobile.svg" width={50} alt="" / ></Link>
                </h1>
                <ul className={Styles.header_navCont}>
                    <li className={Styles.header_naviItem }className={Styles.green}>
                        <a href="/labcafe">
                            Labcafe
                        </a>
                    </li>
                    <li className={Styles.header_naviItem } className={Styles.green}>
                        <Link to ={"/learn/"}>
                            紙を知る
                        </Link>
                    </li>
                    <li className={Styles.header_naviItem }className={Styles.yellow}>
                        <Link to={"/touch/"}>
                            紙に触れる
                        </Link>
                    </li>
                    <li className={Styles.header_naviItem }className={Styles.red}>
                        <Link to={"/enjoy/"}>
                            紙を楽しむ
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <Menu  width={300} right  />
    </header>
    )
}

export default Header
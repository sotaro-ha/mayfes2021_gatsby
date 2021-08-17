import React from 'react'
import * as Styles from "./header.module.scss"
import { Link } from 'gatsby'
import {StaticImage} from "gatsby-plugin-image"

const Header = () => {
    return (
        <header className={Styles.header}>
        <div className={Styles.pc_header}>
            <div className={Styles.header_nav}>
                <h1 className={Styles.header_title}>
                    <a href="/"><StaticImage src="../images/general/Logo_Header_PC.svg" width={200}alt="" / ></a>
                </h1>
                <ul className={Styles.header_navCont}>
                    <li className={Styles.header_naviItem }className={Styles.green}>
                        <a href="/mayfes2021/">
                            紙Fes.
                        </a>
                    </li>
                    <li className={Styles.header_naviItem } className={Styles.green}>
                        <a href="/mayfes2021/learn">
                            紙を知る
                        </a>
                    </li>
                    <li className={Styles.header_naviItem }className={Styles.yellow}>
                        <a href="/mayfes2021/touch">
                            紙に触れる
                        </a>
                    </li>
                    <li className={Styles.header_naviItem }className={Styles.red}>
                        <a href="/mayfes2021/enjoy">
                            紙を楽しむ
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className={Styles.Header__contents}>
            <div className={Styles.header_nav}>
            <h1 className={Styles.header_title}>
                <a href="/"><StaticImage src="../images/general/Logo_Header_mobile.svg"width={45}alt=""/></a>
            </h1>
            <button type="button" className={Styles.HeaderHamburger}>
                <span className={Styles.HeaderHamburger__line}></span>
            </button>
            </div>

        </div>
        <nav className={Styles.Drawer}>
            <ul className={Styles.DrawerList}>
                <li className={Styles.DrawerList__item}>
                    <a href="/mayfes2021/" className={Styles.DrawerLink}>紙Fes.</a>
                </li>
                <li className={Styles.DrawerList__item}>
                    <a href="/mayfes2021/" className={Styles.DrawerLink}>紙を知る</a>
                </li>
                <li className={Styles.DrawerList__item}>
                    <a href="/mayfes2021/" className={Styles.DrawerLink}>紙に触れる</a>
                </li>
                <li className={Styles.DrawerList__item}>
                    <a href="/mayfes2021/" className={Styles.DrawerLink}>紙を楽しむ</a>
                </li>
            </ul>
        </nav>
        <div className={Styles.Drawer__bg}></div>
    </header>
    )
}

export default Header
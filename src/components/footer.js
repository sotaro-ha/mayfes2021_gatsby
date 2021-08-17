import React from 'react'
import * as Styles from "./footer.module.scss"
import {StaticImage} from "gatsby-plugin-image"

const Footer = () => {
    return (
        <footer>
        <div className={Styles.footer_nav}>
            <a href="/"><StaticImage src="../images/general/Logo_footer.svg" /></a>
            <p className={Styles.left}>Copyright (C) designing plus nine. All Rights Reserved.</p>
            <div className={Styles.footer_logo_box}>
                <p className={Styles.right}><a href="https://note.com/dp9" target="_blank"><StaticImage src="../images/general/note.svg"
                            width={45} height={45}/></a></p>
                <p className={Styles.right}><a href="https://twitter.com/DP9_Official?s=20" target="_blank"><StaticImage
                            src="../images/general/twitter.svg" width={45} height={45}/></a></p>
            </div>
        </div>
    </footer>
    )
}

export default Footer
import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import * as Styles from "./view.module.scss"
import glass from "../images/enjoy/colmn_1.svg"
import printer from "../images/enjoy/colmn_2.svg"
import hand from "../images/enjoy/colmn_3.svg"


const View = (props) => {
    
    return (
       
        <section className={Styles.colmn}>
        <div className={Styles.colmn_title}>
            <h2>鑑賞の仕方</h2>
        </div>
        <div className={Styles.colmn_box}>
            <div className={Styles.circle}>
                <div className={Styles.colmn_image}><img src={glass} /></div>
                <div className={Styles.colmn_text}>
               { props.message_1}
                </div>
            </div>
            <div className={Styles.circle} style={{display:props.show_1}}>
                <div className={Styles.colmn_image}><img src={printer} /></div>
                <div className={Styles.colmn_text}>
                    {props.message_2}
                </div>
            </div>
            <div className={Styles.circle} style={{display:props.show_2}}>
                <div className={Styles.colmn_image}><img src={hand} /></div>
                <div className={Styles.colmn_text}>
                    印刷した作品はお読みいただけます。小説を読みながら、紙に触れてくださいね！
                </div>
            </div>
        </div>
        <div className={Styles.colmn_title}>
            <h2>Contents</h2>
        </div>
    </section>
    );
};

export default View
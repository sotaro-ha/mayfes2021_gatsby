import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import * as Styles from "./title.module.scss"
import Learn from "../images/learn/1_Brown.svg"



const Title = (props) => {
    return (

        <section className={props.class}>
        <div className={Styles.image_box}>
            <img src={props.img}/>
        </div>
        <div className={Styles.text_box}>
            <p>{props.message}
            </p>
        </div>
    </section>

    );
};

export default Title
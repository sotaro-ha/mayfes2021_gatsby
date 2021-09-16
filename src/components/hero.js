import React from 'react'
import * as Styles from "../components/hero.module.scss"


const Hero = ({Classname}) => {
   
    return (
        <div className={Classname}>
           <div className={Styles.title_1}>
                <div className={Styles.image_box}>
                    
                </div>
            </div> 
        </div>
    )
}

export default Hero



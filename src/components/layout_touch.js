import * as React from 'react'
import { Link } from 'gatsby'
import Header from "./header"
import Footer from "./footer"
import Title from "./title"
import View from "./view"
import Touch from "../images/touch/2_Brown.svg"
import * as Styles from "../components/layout_index.module.scss"
import {StaticImage} from "gatsby-plugin-image"

const Layout = ({ pageTitle, children }) => {
    return (
      <div>
          <Header />
         <Title
         img={Touch}
         class="title-module--touch_title--1LjCr"
         message=" 「紙に触れる」では一枚小説を読んでいただけます。
         でもただの一枚小説ではありません。色んな趣向が凝らしてあります。小説を紙１枚に印刷して、切って、折って、読んでみてください。そうして、紙に触れてみてくださいね！
     "/>
       <View
       message_1="まず、イラストをクリックすると、小説作品について詳しく知ることができます。"
   message_2="好きな小説を見つけたら、印刷しましょう。すると、小説の面白さ倍増です。"/>
        <Footer />
      </div>
    )
  }
  
  export default Layout
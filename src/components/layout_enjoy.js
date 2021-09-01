import * as React from 'react'
import { Link } from 'gatsby'
import Header from "./header"
import Footer from "./footer"
import Title from "./title"
import View from "./view"
import Enjoy from "../images/enjoy/3_Brown.svg"
import Modal from "./modal_enjoy"
import {StaticImage} from "gatsby-plugin-image"

const Layout = ({  }) => {
    return (
      <div>
          <Header />
        <Title
        message="紙はデジタルにはない「質感」を持っています。そして、紙の質感によって用途が異なります。この企画ではこの紙の質感と用途の組み合わせをちぐはぐにしてみました。是非様々な作品を見て(そして印刷して)この身の回りの紙の質感を楽しんでください。"
        img={Enjoy}
        class="title-module--enjoy_title--2HaAQ"/>
       <View
       show_2="none"
       message_1="クリックすると各作品をキャプションとともに大きな画像でお楽しみいただけます。"
       message_2="本作品の中には実際に印刷して、お楽しみ頂くことができるものもあります。"/>
        <Modal/>
        <Footer />
      </div>
    )
  }
  
  export default Layout
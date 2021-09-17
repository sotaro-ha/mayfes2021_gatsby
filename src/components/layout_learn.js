import * as React from 'react'
import { Link } from 'gatsby'
import Header from "./header"
import Footer from "./footer"
import Title from "./title"
import Modal from "./modal_learn"
import View from "./view"
import Img1 from  "../images/learn/3_Banner.png"



const Layout = ({  }) => {

    return (
      <div>
          <Header />
          <Title class="title-module--learn_title--3ZiDz"
          message=" 身近にある紙製品をじっくり見つめると色々な発見がありました。紙と今までの日本の「伝統」、紙の性質を活かした「機能」、そして質感がもたらす印象を用いた「演出」。3つの視点に立って紙を再発見します。"
          img={Img1}/>
        <View
        show_1="none"
        show_2="none"
        message_1="クリックすると各作品をキャプションとともに大きな画像でお楽しみいただけます。"
        />
        <Modal/>
        <Footer />
      </div>
    )
  }
  
  export default Layout
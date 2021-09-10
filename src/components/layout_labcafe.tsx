
import * as React from "react";
import Title from "../components/title";
import Header from "../components/header";
import View from "../components/view";
import Modal from "react-modal/lib/components/Modal";
import Footer from "../components/footer";

export const LabCafePageLayout = () => {
  return (
    <>
      <Header />
      <Title
        message="紙はデジタルにはない「質感」を持っています。そして、紙の質感によって用途が異なります。この企画ではこの紙の質感と用途の組み合わせをちぐはぐにしてみました。是非様々な作品を見て(そして印刷して)この身の回りの紙の質感を楽しんでください。"
        // img={Enjoy}
        class="title-module--enjoy_title--2HaAQ"
      />
      <View
        show_2="none"
        message_1="クリックすると各作品をキャプションとともに大きな画像でお楽しみいただけます。"
        message_2="本作品の中には実際に印刷して、お楽しみ頂くことができるものもあります。"
      />
      <Modal />
      <Footer />
    </>
  );
};


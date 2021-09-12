import React from "react";
import Header from "./header";
import Modal from "react-modal/lib/components/Modal";
import Footer from "./footer";
import { StaticImage } from "gatsby-plugin-image";

// ts対応（応急処置）
const classes = require("./layout_labcafe.module.scss");
// const indexClasses = require("./layout_index.module.scss")

const LabCafeTop = () => {
  return (
    <>
      {/* <div> */}
      <div className={classes.top__image__wrap}>
      <StaticImage src={`../images/labcafe/top_image_1.svg`} alt="" className={classes.top__image} />
      </div>
      <p className={classes.top__description}>
        「紙Festa.」の展示を行っております。
        <br /> お気軽にお立ち寄りください。
      </p>
      <a
        className={classes.ticket}
        href="https://peatix.com/group/11570814"
        rel="external noreferrer"
        target="_blank"
      >
        ご予約はこちら
      </a>

      <div className={classes.info__container}>
        <div className={[classes.info__item, classes.info__top].join(" ")}>
          2021. 9/12 (日) ▶︎ 9/25 (土)
          <br />
          平日 16:00 - 20:00 / 土日祝 13:00 - 17:00
        </div>
        <div className={classes.info__item}>
          東京都文京区本郷4-1-3 明和本郷ビル7F
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

const LabCafeDetail = () => (
  <>
    <div></div>
  </>
);

export const LabCafePageLayout = () => {
  return (
    <>
      <Header />
      <LabCafeTop />
      <Modal />
      <Footer />
    </>
  );
};

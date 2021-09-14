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
        <StaticImage
          src={`../images/labcafe/top_image_1.svg`}
          alt=""
          className={classes.top__image}
        />
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
        <StaticImage
          src={`../images/labcafe/map.svg`}
          alt=""
          // className={}
        />
      </div>
      {/* </div> */}
    </>
  );
};

const LabCafeDetail = () => (
  <div className={classes.detail__back}>
    <div className={classes.learn__container}>
      <StaticImage
        src={`../images/labcafe/learn.jpg`}
        alt="紙を知る"
        className={classes.learn__image}
      />
      <div className={[classes.detail__container, classes.learn__description].join(" ")}>
        <h2 className={classes.detail__title}>紙を知る</h2>
        <p className={classes.detail__paragraph}>
        身近にある紙製品をじっくり見つめると色々な発見がありました。「伝統」「機能」「演出」の3つの視点に立って紙を再発見します。
        </p>
      </div>
    </div>

    <div className={classes.touch__container}>
      <StaticImage
        src={`../images/labcafe/touch.jpg`}
        alt="紙に触れる"
        className={classes.touch__image}
      />
      <div className={[classes.detail__container, classes.touch__description].join(" ")}>
        <h2 className={classes.detail__title}>紙に触れる</h2>
        <p className={classes.detail__paragraph}>
        「紙に触れる」では一枚小説を読んでいただけます。 でもただの一枚小説ではありません。色んな趣向が凝らしてあります。
        </p>
      </div>
    </div>

    <div className={classes.enjoy__container}>
      <StaticImage
        src={`../images/labcafe/enjoy.jpg`}
        alt="紙を楽しむ"
        className={classes.enjoy__image}
      />
      <div className={[classes.detail__container, classes.enjoy__description].join(" ")}>
        <h2 className={classes.detail__title}>紙を楽しむ</h2>
        <p className={classes.detail__paragraph}>
        紙はデジタルにはない「質感」を持っています。この企画ではこの紙の質感と用途の組み合わせをちぐはぐにしてみました。
        </p>
      </div>
    </div>
  </div>
);

export const LabCafePageLayout = () => {
  return (
    <>
      <Header />
      <LabCafeTop />
      <LabCafeDetail />
      <Modal />
      <Footer />
    </>
  );
};

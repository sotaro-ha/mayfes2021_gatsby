import * as React from "react";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import * as Styles from "../components/layout_index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Header />
      <section className={Styles.title}>
        <div className={Styles.mainVisual}></div>

        <div className={(Styles.title_2, Styles.bg_title2)}>
          <div className={Styles.text_box}>
            <p>
              「あなたが小学生の時、どれくらい紙を使っていましたか？
              <br />
              教科書、ノート、落書き帳…。きっと沢山使っていたと思います。
              <br />
              では、今はどうですか？　もう使っていませんか？
              <br />
              確かに、デジタルの方が便利ですよね。しかも、このご時世ですし。
              <br />
              でも、ちょっと待ってください。
              <br />
              本企画では、皆さんに見放されつつある紙の素敵な一面をお見せして、
              <br />
              皆さんに紙を好きになってもらう事を目指します。
              <br />
              今一度、紙の魅力に触れてみませんか？
            </p>
          </div>
        </div>
      </section>

      <section className={Styles.labcafe__section}>
        <p>Lab-Cafeにて展示実施中！</p>
        <Link to="/labcafe">
          <StaticImage
            src="../images/labcafe/top_link.png"
            className={Styles.labcafe__image}
          ></StaticImage>
        </Link>
      </section>

      <section className={(Styles.colmn, Styles.colmn_bg)}>
        <div className={Styles.colmn_title}>
          <h2>3つの企画</h2>
        </div>
        <div className={Styles.colmn_box}>
          <div className={Styles.area}>
            <div className={Styles.colmn_image}>
              <Link to="/learn">
                <StaticImage src="../images/index/Main_1.svg" />
                <StaticImage
                  src="../images/index/Main_1_Hover.svg"
                  className={Styles.active}
                />
              </Link>
            </div>
            <div className={Styles.colmn_text}>
              紙ならでは！というデザインをご紹介します。
            </div>
          </div>
          <div className={Styles.area}>
            <div className={Styles.colmn_image}>
              <Link to="/touch">
                <StaticImage src="../images/index/Main_2.svg" />
                <StaticImage
                  src="../images/index/Main_2_Hover.svg"
                  className={Styles.active}
                />
              </Link>
            </div>
            <div className={Styles.colmn_text}>
              趣向を凝らした一枚小説を印刷して読むことができます。
            </div>
          </div>
          <div className={Styles.area}>
            <div className={Styles.colmn_image}>
              <Link to="enjoy">
                <StaticImage src="../images/index/Main_3.svg" />
                <StaticImage
                  src="../images/index/Main_3_Hover.svg"
                  className={Styles.active}
                />
              </Link>
            </div>
            <div className={Styles.colmn_text}>
              紙の質感と使い方をチグハグにした展示をご覧いただきます。
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.mfa}>
        <h2>五月祭総選挙の投票</h2>
        <p>
          「紙Festa.」を既にご覧になった方、
          <br />
          五月祭総選挙で本企画にご投票いただければ幸いです！
          <br />
          リンクはこちらになります。
          <br />
          <a
            href="https://gogatsusai.jp/94/mfa/vote?id=502"
            target="_blank"
            rel="external nofollow noreferrer"
            className={Styles.mfa__link}
          >
            https://gogatsusai.jp/94/mfa/vote?id=502
          </a>
          <br />
          また、こちらのQRコードからもご投票いただけます。
        </p>
        <a
          href="https://gogatsusai.jp/94/mfa/vote?id=502"
          target="_blank"
          rel="external nofollow noreferrer"
        >
          <StaticImage
            src="../images/general/mfa.png"
            alt=""
            width={200}
          ></StaticImage>
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Layout;

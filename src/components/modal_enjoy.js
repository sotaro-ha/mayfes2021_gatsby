import React from "react";
import Modal from "react-modal";
import * as Styles from "../components/modal_enjoy.module.scss";
import Img1 from "../images/enjoy/content/modal_1.png";
import Img2 from "../images/enjoy/content/modal_2.jpg";
import Img3 from "../images/enjoy/content/modal_2_2.jpg";
import Img4 from "../images/enjoy/content/modal_3.png";
import Img5 from "../images/enjoy/content/modal_4.jpg";
import Img6 from "../images/enjoy/content/modal_5.png";
import Img7 from "../images/enjoy/content/modal_5_2.png";
import Img7_1 from "../images/enjoy/content/modal_5_3.png";
import Img8 from "../images/enjoy/content/modal_6.jpg";
import Img9 from "../images/enjoy/content/modal_6_1.jpg";
import Img10 from "../images/enjoy/content/modal_6_2.jpg";
import Img11 from "../images/enjoy/content/modal_6_3.png";
import Img12 from "../images/enjoy/content/modal_7.jpeg";
import Img13 from "../images/enjoy/content/modal_8.jpg";
import Img14 from "../images/enjoy/content/modal_8_1.jpg";
import Img15 from "../images/enjoy/content/modal_9.png";
import Img16 from "../images/enjoy/content/modal_10.png";
import { EnjoyPicto } from "./modal_enjoy_picto";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// react-modalの初期設定
// root nodeのSelectorを設定
Modal.setAppElement("#___gatsby");
const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: " scroll",
    height: "80%",
    width: "80%",
    background: "white",
    padding: "40px",
    textalign: "center",
  },
};
const ModalMultiple = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = (num) => {
    setIsOpen(num);
  };

  // shouldCloseOnEscやshouldCloseOnOverlayCliceを使う場合に設定が必要
  // モーダルを非表示の状態にするため、falseを指定する
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const btnContents = [
    { name: "トイレットペーパー×楽譜" },
    { name: "紙テープ×賞状" },
    { name: "ティッシュ×年賀状" },
    { name: "ルーズリーフ×賞状" },
    { name: "紙袋×テスト" },
    { name: "和紙×写真" },
    { name: "和紙×ポップ" },
    { name: "コピー用紙×新聞" },
    { name: "トイレットペーパー×記録" },
    { name: "はがき×カレンダー" },
  ];

  return (
    <div>
      <div className={Styles.container}>
        {btnContents.map((content, index) => (
          <button
            className={["button", Styles.content_panel].join(" ")}
            onClick={() => handleOpenModal(index)}
            key={index}
          >
            <div className={Styles.content_panel__pictogram}>
              <EnjoyPicto id={index} />
            </div>
            {content.name}
          </button>
        ))}
        {/* <button
          className="button"
          className={Styles.content_panel}
          onClick={() => handleOpenModal(0)}
        >
          トイレットペーパー×楽譜
        </button>
        <button
          className="button"
          className={Styles.content_panel}
          onClick={() => handleOpenModal(1)}
        >
          紙テープ×賞状
        </button>
        <button
          className="button"
          className={Styles.content_panel}
          onClick={() => handleOpenModal(2)}
        >
          ティッシュ×年賀状
        </button>
        <button
          className="button"
          className={Styles.content_panel}
          onClick={() => handleOpenModal(3)}
        >
          ルーズリーフ×賞状
        </button>
        <button
          className="button"
          className={Styles.content_panel}
          onClick={() => handleOpenModal(4)}
        >
          紙袋×テスト
        </button>
        <button
          className="button"
          className={Styles.content_panel}
          onClick={() => handleOpenModal(5)}
        >
          和紙×写真
        </button>
        <button
          className="button"
          className={Styles.content_panel}
          onClick={() => handleOpenModal(6)}
        >
          和紙×ポップ
        </button>
        <button
          className="button"
          className={Styles.content_panel}
          onClick={() => handleOpenModal(7)}
        >
          コピー用紙×新聞
        </button>
        <button
          className="button"
          className={Styles.content_panel}
          onClick={() => handleOpenModal(8)}
        >
          トイレットペーパー×記録
        </button>
        <button
          className="button"
          className={Styles.content_panel}
          onClick={() => handleOpenModal(9)}
        >
          はがき×カレンダー
        </button> */}
      </div>

      <Modal
        isOpen={modalIsOpen === 0}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <h3 className={Styles.title}>トイレットペーパー×楽譜</h3>
        <div className={Styles.imgWrapper}>
          <div
            className={Styles.img}
            style={{ backgroundImage: `url(${Img1})` }}
          ></div>
        </div>
        <div className={Styles.textWrapper}>
          <p className={Styles.text}>
            一回用を足すごとに練習課題一曲・・・地獄です
          </p>
        </div>
        <p className={Styles.author}>製作者:orui</p>
        <a href="">
          <div className={Styles.driveButton}>
            <FontAwesomeIcon icon={faTwitter} />
            　シェア
          </div>
        </a>
      </Modal>
      <Modal
        isOpen={modalIsOpen === 1}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <h3 className={Styles.title}>紙テープ×賞状</h3>
        <div className={Styles.imgWrapper}>
          <div
            className={Styles.img}
            style={{ backgroundImage: `url(${Img2})` }}
          ></div>
        </div>
        <div className={Styles.imgWrapper}>
          <div
            className={Styles.img}
            style={{ backgroundImage: `url(${Img3})` }}
          ></div>
        </div>
        <div className={Styles.textWrapper}>
          <p className={Styles.text}>
            賞状が紙テープになりました。これを使えば、送り先に受賞歴をアピールし放題。
          </p>
        </div>
        <p className={Styles.author}>製作者:kamiya</p>
        <a href="">
          <div className={Styles.driveButton}>
            <FontAwesomeIcon icon={faTwitter} />
            　シェア
          </div>
        </a>
      </Modal>
      <Modal
        isOpen={modalIsOpen === 2}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <h3 className={Styles.title}>ティッシュ×年賀状</h3>
        <div className={Styles.imgWrapper}>
          <div
            className={Styles.img}
            style={{ backgroundImage: `url(${Img4})` }}
          ></div>
        </div>
        <div className={Styles.textWrapper}>
          <p className={Styles.text}>くしゃっと丸めてポストにポイ</p>
        </div>
        <p className={Styles.author}>製作者:ツユキ</p>
        <a href="">
          <div className={Styles.driveButton}>
            <FontAwesomeIcon icon={faTwitter} />
            　シェア
          </div>
        </a>
      </Modal>
      <Modal
        isOpen={modalIsOpen === 3}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <h3 className={Styles.title}>ルーズリーフ×賞状</h3>
        <div className={Styles.verticalWrapper}>
          <div className={Styles.imgWrapper}>
            <div
              className={(Styles.img, Styles.vertical)}
              style={{ backgroundImage: `url(${Img5})` }}
            ></div>
          </div>
          <div className={Styles.textWrapper}>
            <p className={Styles.text}>
              先生、本当にその紙しかデスクになかったんですか…？。
            </p>
          </div>
        </div>
        <p className={Styles.author}>製作者:ritar</p>
        <a href="">
          <div className={Styles.driveButton}>
            <FontAwesomeIcon icon={faTwitter} />
            　シェア
          </div>
        </a>
      </Modal>
      <Modal
        isOpen={modalIsOpen === 4}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <h3 className={Styles.title}>紙袋×テスト</h3>
        <div className={Styles.verticalWrapper}>
          <div className={Styles.imgWrapper}>
            <div
              className={(Styles.img, Styles.vertical)}
              style={{ backgroundImage: `url(${Img6})` }}
            ></div>
          </div>
          <div className={Styles.imgWrapper}>
            <div
              className={(Styles.img, Styles.vertical)}
              style={{ backgroundImage: `url(${Img7})` }}
            ></div>
          </div>
        </div>
        <div className={Styles.imgWrapper}>
          <div
            className={Styles.img}
            style={{ backgroundImage: `url(${Img7_1})` }}
          ></div>
        </div>
        <div className={Styles.textWrapper}>
          <p className={Styles.text}>
            もしも試験監督がテスト配布・回収の手間を減らすために袋を作ったら…？というコンセプトで制作
          </p>
        </div>
        <p className={Styles.author}>製作者:orui</p>
        <a href="">
          <div className={Styles.driveButton}>
            <FontAwesomeIcon icon={faTwitter} />
            　シェア
          </div>
        </a>
      </Modal>
      <Modal
        isOpen={modalIsOpen === 5}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <h3 className={Styles.title}>和紙×写真</h3>
        <div className={Styles.verticalWrapper}>
          <div className={Styles.imgWrapper}>
            <div
              className={(Styles.img, Styles.vertical)}
              style={{ backgroundImage: `url(${Img8})` }}
            ></div>
          </div>
          <div className={Styles.imgWrapper}>
            <div
              className={(Styles.img, Styles.vertical)}
              style={{ backgroundImage: `url(${Img9})` }}
            ></div>
          </div>
        </div>
        <div className={Styles.verticalWrapper}>
          <div className={Styles.imgWrapper}>
            <div
              className={(Styles.img, Styles.vertical)}
              style={{ backgroundImage: `url(${Img10})` }}
            ></div>
          </div>
          <div className={Styles.imgWrapper}>
            <div
              className={(Styles.img, Styles.vertical)}
              style={{ backgroundImage: `url(${Img11})` }}
            ></div>
          </div>
        </div>
        <div className={Styles.textWrapper}>
          <p className={Styles.text}>
            古風で雅な素材に写真の鮮烈さ。どの写真がお好みですか？
          </p>
        </div>
        <p className={Styles.author}>製作者:Shiba</p>
        <a href="">
          <div className={Styles.driveButton}>
            <FontAwesomeIcon icon={faTwitter} />
            　シェア
          </div>
        </a>
      </Modal>
      <Modal
        isOpen={modalIsOpen === 6}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <h3 className={Styles.title}>和紙×ポップ</h3>
        <div className={Styles.imgWrapper}>
          <div
            className={Styles.img}
            style={{ backgroundImage: `url(${Img12})` }}
          ></div>
        </div>
        <div className={Styles.textWrapper}>
          <p className={Styles.text}>
            もしも伝統的な和紙に現代的なポップが書かれたら…紙の質感でどれだけポップの印象は変わりますか？
          </p>
        </div>
        <p className={Styles.author}>製作者:hiramai</p>
        <a href="">
          <div className={Styles.driveButton}>
            <FontAwesomeIcon icon={faTwitter} />
            　シェア
          </div>
        </a>
      </Modal>
      <Modal
        isOpen={modalIsOpen === 7}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <h3 className={Styles.title}>コピー用紙×新聞</h3>
        <div className={Styles.imgWrapper}>
          <div
            className={Styles.img}
            style={{ backgroundImage: `url(${Img13})` }}
          ></div>
        </div>
        <div className={Styles.imgWrapper}>
          <div
            className={Styles.img}
            style={{ backgroundImage: `url(${Img14})` }}
          ></div>
        </div>
        <div className={Styles.textWrapper}>
          <p className={Styles.text}>
            めくってもガサガサいわない新聞ってなんか違う...
            こちらの作品は、コンビニでプリントすることができます。以下の番号を打って、
            プリントしてみてください！
          </p>
        </div>
        <p className={Styles.author}>製作者:ヨイヨイ</p>
        <a href="">
          <div className={Styles.driveButton}>
            <FontAwesomeIcon icon={faTwitter} />
            　シェア
          </div>
        </a>
      </Modal>
      <Modal
        isOpen={modalIsOpen === 8}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <h3 className={Styles.title}>トイレットペーパー×記録</h3>
        <div className={Styles.imgWrapper}>
          <div
            className={Styles.img}
            style={{ backgroundImage: `url(${Img15})` }}
          ></div>
        </div>
        <div className={Styles.textWrapper}>
          <p className={Styles.text}>
            トイレットペーパーに記録するのは心許ない？いやいや「水に流す」っていう慣用句があるように、たまには忘れちゃうのもいいと思います。
          </p>
        </div>
        <p className={Styles.author}>製作者:さちこ</p>
        <a href="">
          <div className={Styles.driveButton}>
            <FontAwesomeIcon icon={faTwitter} />
            　シェア
          </div>
        </a>
      </Modal>
      <Modal
        isOpen={modalIsOpen === 9}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <h3 className={Styles.title}>はがき×カレンダー</h3>
        <div className={Styles.verticalWrapper}>
          <div className={Styles.imgWrapper}>
            <div
              className={(Styles.img, Styles.vertical)}
              style={{ backgroundImage: `url(${Img16})` }}
            ></div>
          </div>
          <div className={Styles.textWrapper}>
            <p className={Styles.text}>
              1日めくるごとにとんでもなく労力を使う厚ーいカレンダーをどうぞ。
            </p>
            <p className={Styles.print}>
              お近くのコンビニでネットプリントできます(5/21まで)。予約番号をマルチコピー機で入力してください。
              LAWSON、Family Mart：T4QWJDBNNM セブンイレブン：AAZNLY78
            </p>
          </div>
        </div>
        <p className={Styles.author}>製作者:Tamaki</p>
        <a href="">
          <div className={Styles.driveButton}>
            <FontAwesomeIcon icon={faTwitter} />
            　シェア
          </div>
        </a>
      </Modal>
    </div>
  );
};

export default ModalMultiple;

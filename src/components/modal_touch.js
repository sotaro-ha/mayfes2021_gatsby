import React from "react"
import Modal from "react-modal";
import * as Styles from "../components/modal_touch.module.scss"
import Img1 from "../images/touch/thumbnail/1.png"
import Img2 from "../images/touch/thumbnail/2.png"
import Img3 from "../images/touch/thumbnail/3.png"
import Img4 from "../images/touch/thumbnail/4.png"
import Img5 from "../images/touch/thumbnail/5.png"
import Img6 from "../images/touch/thumbnail/6.png"
import Img7 from "../images/touch/thumbnail/7.png"
import Img8 from "../images/touch/thumbnail/8.png"
import Img9 from "../images/touch/thumbnail/9.png"
import Img10 from "../images/touch/thumbnail/10.png"
import Img11 from "../images/touch/thumbnail/11.png"
import Img12 from "../images/touch/thumbnail/12.png"
import Img13 from "../images/touch/pdf_image/1.png"
import Img14 from "../images/touch/pdf_image/1_2.png"
import Img15 from "../images/touch/pdf_image/2.png"
import Img16 from "../images/touch/pdf_image/2_1.png"
import Img17 from "../images/touch/pdf_image/3.png"
import Img18 from "../images/touch/pdf_image/4.png"
import Img19 from "../images/touch/pdf_image/5.png"
import Img20 from "../images/touch/pdf_image/6_1.png"
import Img21 from "../images/touch/pdf_image/6_2.png"
import Img22 from "../images/touch/pdf_image/7_1.png"
import Img23 from "../images/touch/pdf_image/7_2.png"
import Img24 from "../images/touch/pdf_image/7_3.png"
import Img25 from "../images/touch/pdf_image/8.png"
import Img26 from "../images/touch/pdf_image/8_1.png"
import Img27 from "../images/touch/pdf_image/9.png"
import Img28 from "../images/touch/pdf_image/10.png"
import Img29 from "../images/touch/pdf_image/11.png"
import Img30 from "../images/touch/pdf_image/11_2.png"
import Img31 from "../images/touch/pdf_image/12.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// 使用したいアイコンをインポート
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faVideo } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
// react-modalの初期設定
// root nodeのSelectorを設定
Modal.setAppElement("#___gatsby");
const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow:' scroll',
    height: '80%',
    width: '80%',
    background: 'white',
    padding: '40px',
    textalign: 'center'
  },
};
const ModalMultiple = () => {


  const [modalIsOpen, setIsOpen] = React.useState(false);


  const handleOpenModal = (num) => {
    setIsOpen(num) 
  }

  // shouldCloseOnEscやshouldCloseOnOverlayCliceを使う場合に設定が必要
  // モーダルを非表示の状態にするため、falseを指定する
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return(
    <div >
      <div className={Styles.container} >
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img1})`}} onClick={() => handleOpenModal(0)}></button>
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img2})`}} onClick={() => handleOpenModal(1)}></button>
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img3})`}} onClick={() => handleOpenModal(2)}></button>
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img4})`}} onClick={() => handleOpenModal(3)}></button>
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img5})`}} onClick={() => handleOpenModal(4)}></button>
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img6})`}} onClick={() => handleOpenModal(5)}></button>
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img7})`}} onClick={() => handleOpenModal(6)}></button>
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img8})`}} onClick={() => handleOpenModal(7)}></button>
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img9})`}} onClick={() => handleOpenModal(8)}></button>
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img10})`}} onClick={() => handleOpenModal(9)}></button>
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img11})`}} onClick={() => handleOpenModal(10)}></button>
        <button className="button" className={Styles.content_panel} style={{backgroundImage:`url(${Img12})`}} onClick={() => handleOpenModal(11)}></button>
      </div>

      <Modal 
        isOpen={(modalIsOpen === 0)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <div>
          <h2>いろいろな花</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_1}style={{backgroundImage:`url(${Img13})`}}></div><div  className={Styles.image_2}style={{backgroundImage:`url(${Img14})`}}></div></div>
          <p className={Styles.text}>紙を「めくる」という機会は、ペーパーレスが広まるにつれ次第に少なくなってきました。一方で紙をめくるとき、電子書籍やデータファイルをスクロールするときには得られない心地よさや安心感を覚える方もいるのではないでしょうか。 この作品は、忘れ去られつつある「めくる」行為の魅力を思い出せるよう、紙をめくるところにちょっとした仕掛けを施しました。ぜひ物語の世界、紙の魅力に触れてみて下さい。 ＊本作品は「長編とじ」に設定のうえ、両面印刷をしてお楽しみください。</p>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          </div>
        </div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 1)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <div>
          <h2>メビウスノベル</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_1}style={{backgroundImage:`url(${Img16})`}}></div><div  className={Styles.image_2}style={{backgroundImage:`url(${Img15})`}}></div></div>
          <p  className={Styles.text}>表を辿ると裏に。<br/>
裏を辿ると表に。<br/>
そもそもどこからが表なのか、裏なのか。<br/>
境界はなく、<br/>
表裏一体の世界。<br/>
<br/>
そんな不思議なメビウスの輪を素材に、紙を手繰って読む体験をお届けします。<br/>
<br/>
心地よい紙の手触りに、忘れていた何かが蘇る。<br/>
<br/>
※作り方は画像をダウンロードしてお確かめください。のり、ハサミが必要です。<br/>
※フチ無しカラー印刷を推奨します。</p>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          </div>
        </div>

      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 2)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <div>
          <h2>予感</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_2}style={{backgroundImage:`url(${Img17})`}}></div> <p className={Styles.text}>いつもだったら濡らしたくない、紙。
滲むとちょっとテンションが下がる、紙。
でも、紙って意外と濡れても強いし、滲んだ色って実は神秘的。
たまにはあえて、紙を濡らしてみるのも悪くない。 そんな思いから作った、”濡らすと読めるミステリー”です。 紙を濡らしてみるワクワク感と、結末に迫るワクワク感。 両方を味わっていただけたらなと思います。 ※A4普通紙に、インクジェット(家庭用)プリンターで印刷して下さい。レーザープリンター(コンビニなど)での印刷では、濡らしても読むことができないのでご注意下さい。 ※まず上の本文を読んでから、結末(下のモザイク部分)を濡らしてお読み下さい。水をたっぷり含ませたティッシュなどでなぞるとしっかり濡らせます。少し時間がかかりますが、乾くまで待つと読みやすくなります。 本文著者：山川方夫</p></div>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          </div>
        </div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 3)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
       <div>
          <h2>切り紙小説</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_1}style={{backgroundImage:`url(${Img18})`}}></div> <p className={Styles.text}>ここに書かれているのは二つの小説です。<br/>折って、切って...あなたの手を動かすごとに変化する物語を、ぜひ楽しんでください。</p></div>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          </div>
        </div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 4)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
       <div>
          <h2>紙の重み</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_2}style={{backgroundImage:`url(${Img19})`}}></div> <p className={Styles.text}> 安アパートに住むあなたとその隣人の関係はとても簡潔なものだった。あなたが日勤で彼は夜勤。仕事場は勿論違う。偶然入れ違って扉の前で挨拶を交わす、そんな関係。 ある日あなたが家を出ると隣室の扉が空いている。不審に思いつつも中を窺うと一枚の葉書が落ちていた......

......猫？ 一体何処に？ ここにあるのは餌皿だけだ。 夜中、猫がしきりに鳴いていたのを思い出す。 葉書の生々しい重みだけが、残っている。(この作品は葉書サイズ・フチなしプリントを推奨します)</p></div>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          </div>
        </div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 5)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
       <div>
          <h2>春</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_1}style={{backgroundImage:`url(${Img20})`}}></div><div  className={Styles.image_2}style={{backgroundImage:`url(${Img21})`}}></div></div>
          <p>※A4、フチなしで両面印刷してください。 町の人々は、なにか楽しいことがないかと考えていました。気がふさいで、ぼんやりとして、みんながしあわせを願っていました。 すると、ある細く澄んだ音がきこえてきます。この不思議な音をきいたものには、しあわせがやってくるのです。 小川未明の小説「春」を、手元に置いて楽しめる作品をつくりました。折り紙のようにして手のひらサイズの箱をつくりながら、順番にお読みください（手順がわかりにくければ、動画をご覧ください）。</p>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          <a href="https://drive.google.com/file/d/12ZO1OLgjktEBW8QVb_GCY5w-xPvbxry1/view"><div className={Styles.driveButton}><FontAwesomeIcon icon={faVideo}/>　動画</div></a>
          </div>
        </div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 6)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
       <div>
          <h2>春の詩集</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_1}style={{backgroundImage:`url(${Img22})`}}></div><div  className={Styles.image_2}style={{backgroundImage:`url(${Img23})`}}></div></div>
          <div className={Styles.imageWrapper}><div className={Styles.image_1}style={{backgroundImage:`url(${Img24})`}}></div> <p className={Styles.text}>紙はふところが深い。<br/>
光を、空間を、記憶を、無言で包み、受け容れる。<br/>
<br/>
一枚の紙に刷られた、紙のようにやわらかくよりそう一篇の詩。<br/>
紙を切って、折って、綴じて、<br/>
あなたの詩集を作って下さい。<br/>
<br/>
＊長辺とじの両面印刷をしてください。<br/>
＊端が見切れる場合は少し小さめに印刷してください。<br/>
<br/>
詩：春の詩集　河井酔茗「酔茗詩抄」より</p></div>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          </div>
        </div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 7)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <div>
          <h2>折り紙小説</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_1}style={{backgroundImage:`url(${Img25})`}}></div><div  className={Styles.image_2}style={{backgroundImage:`url(${Img26})`}}></div></div>
          <p>小説が立体になったとき、その筋書きも立体的にすることができるでしょう。風船の上に広がる小説をお楽しみください。</p>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          </div>
        </div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 8)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
       <div>
          <h2>安田講堂</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_1}style={{backgroundImage:`url(${Img27})`}}></div> <p className={Styles.text}>折り紙アーキテクチャと呼ばれる方法で、紙一枚から立ち上がる安田講堂を作りました。ぜひ、刷って組み立ててください！</p></div>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          </div>
        </div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 9)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <div>
          <h2>並び変え小説</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_1}style={{backgroundImage:`url(${Img28})`}}></div> <p className={Styles.text}>この企画「並べ替え小説」は、物語をバラバラにして並べ替えたものを皆さんに組み替えていただき、その過程で「紙を切る」という行為に 思いを馳せてもらおうという企画です。</p></div>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          </div>
        </div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 10)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <div>
          <h2>四季折々</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_1}style={{backgroundImage:`url(${Img30})`}}></div><div  className={Styles.image_2}style={{backgroundImage:`url(${Img29})`}}></div></div>
          <p>ふわふわとして、移ろいやすい私たちの気持ち。 それをふわりと空に浮かぶ風船になぞらえて。 今もどこかで起きていそうな、そんなありふれた日常を描く４つのお話を、一緒に「折」りなしてみませんか？ ※この作品は、A4普通紙に家庭用プリンターで、フチ無し印刷を推奨します。折り方ガイドを参照しながら折ってください。</p>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          </div>
        </div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 11)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <div>
          <h2>こひぶみ</h2>
          <div className={Styles.imageWrapper}><div className={Styles.image_1}style={{backgroundImage:`url(${Img31})`}}></div> <p className={Styles.text}>デジタル化が進む現代ですが、自分の想いを紙で届ける主人公・平一郎をテーマにしました。 心を寄せる和歌へその想いを伝えるべく、気持ちを整理しながら、しかし正直に、簡単にはデリートできない”言葉”で記していく平一郎を、ぜひ想像しながら読んでみてください。</p></div>
          <div className={Styles.buttonWrapper} >
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faGoogleDrive}/>　ダウンロード</div></a>
          <a href=""><div className={Styles.driveButton}><FontAwesomeIcon icon={faTwitter}/>　シェア</div></a>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalMultiple
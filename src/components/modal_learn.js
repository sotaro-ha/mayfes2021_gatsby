import React from "react"
import Modal from "react-modal";
import Tab from "./tab"
import * as Styles from "../components/modal_learn.module.scss"
import Img1 from "../images/learn/dento1.jpg"
import Img2 from "../images/learn/dento2.jpg"
import Img3 from "../images/learn/dento3.jpg"
import Img4 from "../images/learn/dento4.jpg"
import Img5 from "../images/learn/direction1.jpeg"
import Img6 from "../images/learn/direction2.jpg"
import Img7 from "../images/learn/direction3.jpg"
import Img8 from "../images/learn/direction4.jpg"
import Img9 from "../images/learn/direction5.jpg"
import Img10 from "../images/learn/kino1.jpg"
import Img11 from "../images/learn/kino2.png"
import Img12 from "../images/learn/kino3.jpg"
import Img13 from "../images/learn/kino4.jpeg"

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
    width: '90%',
    background: 'white',
    padding: '20px',
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
        <button className="button" className={Styles.content_panel} onClick={() => handleOpenModal(0)}>紙と伝統</button>
        <button className="button" className={Styles.content_panel} onClick={() => handleOpenModal(1)}>紙と機能</button>
        <button className="button" className={Styles.content_panel} onClick={() => handleOpenModal(2)}>紙と演出</button>
      </div>

      <Modal 
        isOpen={(modalIsOpen === 0)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <Tab 
        title_1="ふすま"
        title_2="行灯"
        title_3="紙風船"
        title_4="せんす"
        contentText_1="日本家屋によく用いられるふすまは部屋を仕切るものですが、空間そのものを完全に切り分けているわけではありません。ふすまを外すことで2部屋を1部屋に広げられ、また開ける場所を変えることで自由な室内空間を作り出すことができます。ふすまには絵が描かれていることもあり、日本絵独特の淡い色使いから奥ゆかしさが感じられます。"
        source_1="写真出典：写真AC https://www.photo-ac.com/main/detail/1209662?title=%E8%A5%96%E7%B5%B5"
        contentText_2="これは、行灯と呼ばれる日本の昔ながらの照明器具です。皆さんは、この画像を見てどんな印象を受けましたか？
        暖かい、懐かしい、はかない…こんな印象を持ったのではないでしょうか。日本の伝統的な紙製品の持つこういった印象は、「境界の曖昧さ」や「淡い色使い」によって与えられると考えられます。"
        contentText_3="昔ながらの玩具、紙風船。グラシン紙という素材が光を拡散しながら通すことで、紙風船の淡い色とともに輪郭のはっきりしない光の広がりをもたらし、柔らかな印象を与えます。紙風船の口が空いていることも内と外の区切りを曖昧にし、少し萎んだ形となって儚げな雰囲気を演出します。"
        contentText_4="暑い夏に大活躍の扇子。古くは和歌のやりとりにも使われ、愛されてきました。淡い色使いのものが多く、加えて紙の透け感がより涼しげな気持ちにさせてくれます。また扇子特有の香りもやわらかな印象を与えてくれます。"
        source_4="写真出典: 写真AC https://www.photo-ac.com/main/detail/4445201&title=%E6%89%87%E5%AD%90%E3%81%A8%E5%92%8C%E8%8F%93%E5%AD%90"
        photo_1={Img1}
        photo_2={Img2}
        photo_3={Img3}
        photo_4={Img4}
        display="none"/>
      </Modal>
      <Modal
        isOpen={(modalIsOpen === 1)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <Tab
        title_1="トイレットペーパー"
        title_2="尿検査"
        title_3="紙袋"
        title_4="ティッシュ"
        contentText_1="トイレットペーパーとティッシュの顕著な差異としては、水溶性が挙げられます。前者は下水管を詰まらせないために、パルプ屑に分離しやすいよう設計されています。後者は、鼻水や涙などの液体を拭き取る際に屑が付着しないよう、水に浸けても分離しない設計となっています。"
        contentText_2="紙の容易に折れる性質は、水をはじく表面の加工と組み合わさり、尿検査の紙コップでも生きています。持ち運びは薄い平面の状態で行うことで、ランドセルに入れても潰されず、あとで自分で立体的に折ることによりしっかりコップとして機能します。
        画像作成　須藤　慈英"
        contentText_3="トイレットペーパーやティッシュは紙の柔らかさを活かした製品ですが、逆に丈夫さを活かした製品もあります。紙は軽くて加工しやすい一方、厚さや種類を工夫すれば、簡単にある程度の強度を持った立体構造にすることができます。 　
        身近な紙袋もこの機能を利用した製品の一つです。重いものを入れても形が崩れない紙袋は人々の生活を支えています。さらに、紙袋のもう一つの重要な役割は広告です。紙の種類にこだわったり、紙の加工しやすいという機能を利用して表面に光沢を出すことによってブランドイメージにあった紙袋が作られています。（君塚恵万）
        
        撮影：君塚恵万"
        contentText_4="暑い夏に大活躍の扇子。古くは和歌のやりとりにも使われ、愛されてきました。淡い色使いのものが多く、加えて紙の透け感がより涼しげな気持ちにさせてくれます。また扇子特有の香りもやわらかな印象を与えてくれます。"
        source_4="写真出典: 写真AC https://www.photo-ac.com/main/detail/4445201&title=%E6%89%87%E5%AD%90%E3%81%A8%E5%92%8C%E8%8F%93%E5%AD%90"
        photo_1={Img10}
        photo_2={Img11}
        photo_3={Img12}
        photo_4={Img13}
        display="none"
        />
      </Modal>
      <Modal
        isOpen={(modalIsOpen === 2)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <Tab
        title_1="ステッカー"
        title_2="メニュー"
        title_3="ペーパークラフト"
        title_4="びんせん"
        title_5="マスキングテープ"
        contentText_1="自己主張ツールであるステッカーは、形・サイズ・色も多様で、独自のデザインが多いです。容姿の材質も様々で、例えば上質紙やアート紙は耐水性がないので屋内用に最適で、白PETT（耐水紙）は屋外でも使用できます。自分に合うステッカーでスマホやノートを飾ることで、自分らしさを表現できます。　"
        contentText_2="飲食店のメニューにも紙による演出の可能性があるでしょう。例えば、写真や色を多用し光沢感のあるファミレスのメニューと、和紙に品名だけを墨で書いた和風料亭のメニューを比べてみます。後者のメニューは和紙素材による高級感、手書きの文字による唯一性を持っていることがわかります。このような唯一性はそのメニューを置いている料亭、それを手に取る客の経験をも特別なものにします。"
        contentText_3="そして、紙の表現は平面に留まりません。例えば、ペーパークラフトで遊んだことのある方も多いのではないでしょうか。
        平面を交差させ、無の空間を取り込んで有として形作る、二次元から三次元への拡張が絶妙です。
        自由な色や材質で魅せる多彩な表現には、プラモデルなどとはまた違った趣が感じ取れるはずです。"
        contentText_4="紙質により醸し出す雰囲気を変える便箋。例えば同じ和紙でも、産地によって刷毛目の目立ち方、筆のにじみ具合が変わります。厚みのある紙で文章に重厚感を、切り抜きや透かしで遊び心を持たせることもできます。伝えたい想いにぴったりの紙とともに、手に取れる形で言葉を贈ってみませんか？（こしひかり）"
        contentText_5="可愛い物好きを虜にするマスキングテープ。強さとしなやかさを兼ね備える和紙にしか生み出せない薄さが特徴の保護テープとして誕生しました。いつしか和紙の繊維が生み出す透け感や温かさが人々の心を捉え、表現ツールとしての地位を確立したこのテープは、ラッピングや手紙の飾り付けに使うことで手作りの温もりを届けてくれます。"
        source_5="出典(写真)
        上：掛上紗矢
        中・下：マステアート展　https://www.marks.jp/news/shop/160128_1556.php"
        photo_1={Img5}
        photo_2={Img6}
        photo_3={Img7}
        photo_4={Img8}
        photo_5={Img9}/>
      </Modal>
      
    </div>
  )
}

export default ModalMultiple
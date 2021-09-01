import React from "react"
import Modal from "react-modal";
import * as Styles from "../components/modal_enjoy.module.scss"

// react-modalの初期設定
// root nodeのSelectorを設定
Modal.setAppElement("#___gatsby");

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
    <div>
      <div className="container">
        <div className={Styles.content_panel}>
          <li><button className="button" onClick={() => handleOpenModal(0)}>モーダル1</button></li>
        </div>
        <div className={Styles.content_panel}>
          <li><button className="button" onClick={() => handleOpenModal(1)}>モーダル2</button></li>
        </div>
        <div className={Styles.content_panel}>
          <li><button className="button" onClick={() => handleOpenModal(2)}>モーダル3</button></li>
        </div>
        <div className={Styles.content_panel}>
          <li><button className="button" onClick={() => handleOpenModal(3)}>モーダル4</button></li>
        </div>
        <div className={Styles.content_panel}>
          <li><button className="button" onClick={() => handleOpenModal(4)}>モーダル5</button></li>
        </div>
        <div className={Styles.content_panel}>
          <li><button className="button" onClick={() => handleOpenModal(5)}>モーダル6</button></li>
        </div>
        <div className={Styles.content_panel}>
          <li><button className="button" onClick={() => handleOpenModal(6)}>モーダル7</button></li>
        </div>
        <div className={Styles.content_panel}>
          <li><button className="button" onClick={() => handleOpenModal(7)}>モーダル8</button></li>
        </div>
        <div className={Styles.content_panel}>
          <li><button className="button" onClick={() => handleOpenModal(8)}>モーダル9</button></li>
        </div>
        <div className={Styles.content_panel}>
          <li><button className="button" onClick={() => handleOpenModal(9)}>モーダル10</button></li>
        </div>
      </div>

      <Modal 
        isOpen={(modalIsOpen === 0)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル1の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 1)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル2の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 2)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル3の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 3)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル4の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 4)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル5の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 5)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル6の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 6)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル7の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 7)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル8の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 8)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル9の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 9)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル10の表示内容です。</div>
      </Modal>
    </div>
  )
}

export default ModalMultiple
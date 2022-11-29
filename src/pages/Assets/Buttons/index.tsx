import {Link} from 'react-router-dom';
import styles from './index.module.scss';
import sendIcon from "@/assets/icons/send.svg";
import receiveIcon from "@/assets/icons/receive.svg";
import swapIcon from "@/assets/icons/swap.svg";
import {QRCodeSVG} from 'qrcode.react';
import copy from 'copy-to-clipboard';
import React from "react";
import Modal from "react-modal";
import message from "@/components/Message/message";


function Buttons() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={styles['btn-box']}>
            <a onClick={openModal}><img src={sendIcon} alt=""/><p>Receive</p></a>
            <Modal
                appElement={document.getElementById("app") || undefined}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Receive ETH Modal"
                className={styles['ReceiveModal']}
                overlayClassName={styles['ReceiveOverlay']}
                shouldCloseOnOverlayClick={false}
            >
                <div className={styles['modal-main']}>
                    <i className={styles['close']} onClick={closeModal}/>
                    <h1>Receive ETH</h1>
                    <h6>Assets can only be transformed in the same network</h6>
                    <div className={styles['qrcode']}>
                        <QRCodeSVG value={'https://www.google.com'}/>
                    </div>
                    <div className={styles['address']}>
                        <span>0x194cd…c88c</span>
                        <i onClick={() => {
                            copy('123');
                            message.success('Copied');
                        }}/>
                    </div>
                </div>
            </Modal>
            <Link to="/assets/sendSOL"><img src={receiveIcon} alt=""/><p>Send</p></Link>
            <Link to="/swap"><img src={swapIcon} alt=""/><p>Swap</p></Link>
        </div>
    );
}

export default Buttons

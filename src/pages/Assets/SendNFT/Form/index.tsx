import styles from './index.module.scss';
import pictureNFT from './img/nft.webp'

function SendForm() {
    return (
        <div className={styles['form-box']}>
            <div className={styles['form-item']}>
                <label>NFT</label>
                <div className={styles['info-box']}>
                    <img src={pictureNFT} alt=""/>
                    <p><b>SdPunk #3319</b><span>ID: 0x495f...7b5e</span></p>
                </div>
            </div>
            <div className={styles['form-item']}>
                <label>To</label>
                <div className={styles['input-box']}>
                    <input placeholder='Enter address or ID'/>
                </div>
                <div className={styles['fee-box']}>
                    <b>Network fee</b><span>0.000005 ETH</span>
                </div>
            </div>
            <div className={styles['submit-btn']}>
                <button className={styles['send']}>Send</button>
            </div>
        </div>
    );
}

export default SendForm;

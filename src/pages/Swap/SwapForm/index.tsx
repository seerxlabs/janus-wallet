import classnames from 'classnames';
import styles from './index.module.scss';
import iconEth from "../../../assets/icons/net-eth.svg";

function SwapForm() {
    return (
        <div className={classnames(styles['form-box'])}>
            <div className={classnames(styles['form-main'])}>
                <div className={styles['form-item']}>
                    <div className={styles['item-name']}>
                        <label>Pay</label>
                        <b>Max 0.01756968 ETH</b>
                    </div>
                    <div className={styles['item-data']}>
                        <b>0.01756968</b>
                        <div className={styles['net-name']}>
                            <img src={iconEth} alt=""/>
                            <span>ETH</span>
                            <a/>
                        </div>
                    </div>
                </div>
                <div className={styles['switch-btn']}><i/><a/><i/></div>
                <div className={styles['form-item']}>
                    <div className={styles['item-name']}>
                        <label>Receive</label>
                    </div>
                    <div className={styles['item-data']}>
                        <b>0.56506</b>
                        <div className={styles['net-name']}>
                            <img src={iconEth} alt=""/>
                            <span>SOL</span>
                            <a/>
                        </div>
                    </div>
                </div>
            </div>
            <button className={styles['check']}>Check order</button>
        </div>
    );
}

export default SwapForm;

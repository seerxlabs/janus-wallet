import styles from './index.module.scss';
import iconReceive from "@/assets/icons/type-receive.svg"
import iconSend from "@/assets/icons/type-send.svg"
import iconSwap from "@/assets/icons/type-swap.svg"

export default function TradeLog() {
    return (
        <div className={styles['log-list']}>
            <h6>Transaction histories</h6>
            <ul>
                <label>Nov 13 2022</label>
                <li>
                    <img src={iconReceive} alt=""/>
                    <div className={styles['net-name']}>
                        <b>Receive</b>
                        <span>From: TPWmjiY…FxOjNJ</span>
                    </div>
                    <div className={styles['net-assets']}>
                        <b>0.0021 ETH</b>
                        <span>Processing</span>
                    </div>
                </li>
                <li>
                    <img src={iconSend} alt=""/>
                    <div className={styles['net-name']}>
                        <b>Send</b>
                        <span>To: TPWmjiY…FxOjNJ</span>
                    </div>
                    <div className={styles['net-assets']}>
                        <b>-0.0006 ETH</b>
                        <span>Processing</span>
                    </div>
                </li>
                <li>
                    <img src={iconSwap} alt=""/>
                    <div className={styles['net-name']}>
                        <b>Swap</b>
                        <span>To: TPWmjiY…FxOjNJ</span>
                    </div>
                    <div className={styles['net-assets']}>
                        <b>-0.0006 ETH</b>
                        <span>Completed</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};


import styles from './index.module.scss';
import IconSend from '@/assets/icons/send-success.svg'
import BackBar from '@/components/BackBar';

export default function OrderDetail() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <div className={styles['confirm-main']}>
                    <img src={IconSend} alt=""/>
                    <h2><span>-20</span><b>USDC</b></h2>
                    <h6>Send</h6>
                    <div className={styles['info-box']}>
                        <p><b>State</b><span>Completed</span></p>
                        <p><b>Time</b><span>Nov 13 2022, 19:04</span></p>
                        <p><b>Address</b><span>0xA0BdEa……4C1977</span></p>
                        <p><b>Network fee</b><span>4.0 USDT</span></p>
                    </div>
                    <a className={styles['check']} target="_blank" href="https://www.google.com">Check on Sui</a>
                </div>
            </div>
        </div>
    );
}


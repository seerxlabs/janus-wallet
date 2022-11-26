import styles from './index.module.scss';
import iconEth from "@/assets/icons/net-eth.svg"
import iconTron from "@/assets/icons/net-tron.svg"

export default function TokenList () {
  return (
    <div className={styles['token-list']}>
        <div className={styles['item']}>
            <img src={iconEth} alt=""/>
            <div className={styles['net-name']}>
                <b>Ethereum</b>
                <p>
                    <span>$1,585.36</span>
                    <span className={styles['data-up']}>+2.43%</span>
                </p>
            </div>
            <div className={styles['net-assets']}>
                <b>942.5615 TRX</b>
                <span>$58.93</span>
            </div>
        </div>
        <div className={styles['item']}>
            <img src={iconTron} alt=""/>
            <div className={styles['net-name']}>
                <b>Ethereum</b>
                <p>
                    <span>$1,585.36</span>
                    <span className={styles['data-down']}>-1.43%</span>
                </p>
            </div>
            <div className={styles['net-assets']}>
                <b>942.5615 TRX</b>
                <span>$58.93</span>
            </div>
        </div>
    </div>
  );
};


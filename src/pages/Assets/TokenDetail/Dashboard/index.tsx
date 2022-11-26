import styles from './index.module.scss';
import iconEth from "@/assets/icons/net-eth.svg"

export default function TokenDashboard() {
    return (
        <div>
            <img className={styles['logo']} src={iconEth} alt=""/>
            <p className={styles['token']}><span>0.001562</span><b>ETH</b></p>
            <p className={styles['currency']}>≈ $ 58.94</p>
        </div>
    );
}

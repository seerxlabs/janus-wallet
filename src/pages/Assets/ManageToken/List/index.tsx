import styles from './index.module.scss';
import iconEth from "@/assets/icons/net-eth.svg"
import iconTron from "@/assets/icons/net-tron.svg"

export default function TokenList() {
    return (
        <div className={styles['token-list']}>
            <div className={styles['input-box']}>
                <input type="text"/><a/>
            </div>
            <div className={styles['item']}>
                <img src={iconEth} alt=""/>
                <p>TRX</p>
                <a/>
            </div>
            <div className={styles['item']}>
                <img src={iconTron} alt=""/>
                <p>TRX</p>
                <a/>
            </div>
        </div>
    );
};


import styles from './index.module.scss';
import BackBar from "@/components/BackBar";

export default function SwapSuccess() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <i/>
                <h1>Swap successfully</h1>
                <h6>+ 0.56537 USDC</h6>
                <button className={styles['close']}>Close</button>
                <button className={styles['detail']}>Details</button>
            </div>
        </div>
    );
}


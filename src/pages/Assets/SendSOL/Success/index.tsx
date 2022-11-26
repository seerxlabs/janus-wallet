import styles from './index.module.scss';
import BackBar from "@/components/BackBar";

export default function SendSOLSuccess() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <i/>
            <h1>Send successfully</h1>
            <h6>- 20.00223 SOL</h6>
            <button className={styles['close']}>Close</button>
            <button className={styles['detail']}>Details</button>
        </div>
    );
}

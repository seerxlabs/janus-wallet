import styles from './index.module.scss';
import BackBar from "@/components/BackBar";

export default function ResetWallet() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <i/>
            <h1>Reset Janus</h1>
            <h6>All data you created on Janus is about to be deleted, make sure it is properly backed up before entering "RESET"</h6>
            <div className={styles['input-box']}>
                <input placeholder={'Enter "RESET"'}/>
            </div>
            <div className={styles['reset-btn']}>
                <button className={styles['cancel']}>Cancel</button>
                <button className={styles['confirm']}>Confirm</button>
            </div>
        </div>
    );
}


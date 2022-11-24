import styles from './index.module.scss';

function ResetWallet() {
    return (
        <div className={styles['page-main']}>
            <i/>
            <h1>Reset Janus</h1>
            <h6>All data you created on Janus is about to be deleted, make sure it is properly backed up before entering "RESET"</h6>
            <div className={styles['input-box']}>input</div>
            <div className={styles['reset-btn']}>
                <button className={styles['cancel']}>Cancel</button>
                <button className={styles['confirm']}>Confirm</button>
            </div>
        </div>
    );
}

export default ResetWallet;

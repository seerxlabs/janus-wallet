import styles from './index.module.scss';

function SwapSuccess() {
    return (
        <div className={styles['page-main']}>
            <i/>
            <h1>Swap successfully</h1>
            <h6>+ 0.56537 USDC</h6>
            <button>Close</button>
            <button>Details</button>
        </div>
    );
}

export default SwapSuccess;

import styles from './index.module.scss';
import BackBar from "../../../../../components/BackBar";

export default function ResetWalletSuccess() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <i/>
            <h1>Reset successfully</h1>
            <h6>Click the button below to create or import a wallet</h6>
            <button>Create / Import wallet</button>
        </div>
    );
}


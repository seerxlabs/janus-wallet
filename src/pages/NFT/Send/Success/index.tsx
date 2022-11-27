import styles from './index.module.scss';
import BackBar from "../../../../components/BackBar";

export default function SendNFTSuccess() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <i/>
            <h1>Send successfully</h1>
            <h6>SdPunk #3319</h6>
            <button>Got it</button>
        </div>
    );
}


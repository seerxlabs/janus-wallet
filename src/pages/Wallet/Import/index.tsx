import styles from "./index.module.scss";
import {Link} from "react-router-dom";
import WebTop from "@/components/WebTop";
import WebBack from "@/components/WebBack";

export default function ImportWallet() {
    return (
        <div className={styles['page-main']}>
            <WebTop/>
            <div className={styles['page-container']}>
                <WebBack/>
                <h2>Choose a way to import your wallet</h2>
                <div className={styles['channel-box']}>
                    <Link to="/wallet/import/phrase" className={styles['on']}>
                        <b>Seed phrase/Private keys</b>
                    </Link>
                    <Link to="/wallet/import/email">
                        <b>Use Email to restore the wallet</b>
                        <span>Recommended for users who have created wallets with email in Janus</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

import styles from "./index.module.scss";
import {Link} from "react-router-dom";
import WebTop from "@/components/WebTop";
import WebBack from "@/components/WebBack";

export default function CreateWallet() {
    return (
        <div className={styles['page-main']}>
            <WebTop/>
            <div className={styles['page-container']}>
                <WebBack/>
                <h2>Choose a way to create your wallet</h2>
                <div className={styles['channel-box']}>
                    <Link to="/wallet/create/phrase" className={styles['on']}>
                        <b>Use the seed phrase</b>
                    </Link>
                    <Link to="/wallet/create/email">
                        <b>Use an Email address</b>
                        <span>For first-time users</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

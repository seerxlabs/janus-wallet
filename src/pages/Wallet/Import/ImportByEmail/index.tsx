import styles from "./index.module.scss";
import JanusLogo from "@/assets/avatars/janus.svg"
import IconCreate from "@/assets/icons/add.svg"
import IconImport from "@/assets/icons/import.svg"
import {Link} from "react-router-dom";
import WebTop from "@/components/WebTop";

export default function ImportWalletByEmail() {
    return (
        <div className={styles['page-main']}>
            <WebTop/>
            <div className={styles['page-container']}>
                <img className={styles['logo']} src={JanusLogo} alt=""/>
                <h1>Welcome to Janus</h1>
                <h6>Open the gateway to freedom, connect to Web3 seamlessly</h6>
                <div className={styles['create-import']}>
                    <Link to="/wallet/create">
                        <img src={IconCreate} alt=""/>
                        <b>Create Wallet</b>
                        <span>Create wallet with recovery phrase, email</span>
                    </Link>
                    <Link to="/wallet/import">
                        <img src={IconImport} alt=""/>
                        <b>Import Wallet</b>
                        <span>Import wallet with recovery phrase, private key, email</span>
                    </Link>
                </div>
            </div>
            <div className={styles['copyright']}>
                <p>By continuing, you agree to the <a>service agreement</a> and <a>privacy terms</a>.</p>
            </div>
        </div>
    );
}

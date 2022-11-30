import styles from './index.module.scss';
import JanusLogo from "@/assets/avatars/janus.svg"
import {Link} from "react-router-dom";

export default function UnlockPage() {
    return (
        <div className={styles['page-main']}>
            <div className={styles['page-container']}>
                <img src={JanusLogo} alt=""/>
                <h1>Welcome to Janus</h1>
                <h6>Open the gateway to freedom, <br/>connect to Web3 seamlessly</h6>
                <div className={styles['password-box']}>
                    <input type="password" placeholder={'Please enter password'}/><a/>
                </div>
                <button>Unlock</button>
                <Link className={styles['forget']} to="/settings/resetWallet">Forget Password?</Link>
            </div>
        </div>
    );
}

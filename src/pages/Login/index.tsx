import styles from "./index.module.scss";
import JanusLogo from "@/assets/avatars/janus.svg"

export default function LoginPage() {
    return (
        <div className={styles['page-main']}>
            <div className={styles['page-container']}>
                <img src={JanusLogo} alt=""/>
                <h1>Welcome to Janus</h1>
                <h6>Open the gateway to freedom, <br/>connect to Web3 seamlessly</h6>
                <a target="_blank" href="chrome-extension://plpcpcnjidpihgooeejmppegnalcholf/#/welcome">Create / Import wallet</a>
            </div>
        </div>
    );
}

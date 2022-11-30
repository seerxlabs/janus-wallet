import styles from "./index.module.scss";
import JanusLogo from "@/assets/avatars/janus.svg"

export default function LoginPage() {
    function jumpToWelcome () {
        chrome.tabs.create({ url: "#/welcome" })
    }
    return (
        <div className={styles['page-main']}>
            <div className={styles['page-container']}>
                <img src={JanusLogo} alt=""/>
                <h1>Welcome to Janus</h1>
                <h6>Open the gateway to freedom, <br/>connect to Web3 seamlessly</h6>
                <a onClick={jumpToWelcome}>Create / Import wallet</a>
            </div>
        </div>
    );
}

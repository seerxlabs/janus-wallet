import styles from "./index.module.scss";
import JanusLogo from "/src/assets/avatars/janus.svg"
import {Link} from "react-router-dom";

export default function LoginPage() {
    return (
        <div className={styles['page-main']}>
            <img src={JanusLogo} alt=""/>
            <h1>Welcome to Janus</h1>
            <h6>Open the gateway to freedom, <br/>connect to Web3 seamlessly</h6>
            <Link to="create">Create / Import wallet</Link>
        </div>
    );
}

import styles from './index.module.scss';
import IconLogo from "@/assets/avatars/janus.svg"

function WebTop() {
    return (
        <div className={styles['top-bar']}>
            <img src={IconLogo} alt=""/>
            <p>Janus</p>
        </div>
    );
}

export default WebTop;

import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";

function BackBar() {
    const navigate = useNavigate();
    return (
        <div className={styles['back-bar']}>
            <a onClick={() => navigate(-1)} />
        </div>
    );
}

export default BackBar;

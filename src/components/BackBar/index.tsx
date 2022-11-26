import styles from './index.module.scss';
import { useHistory } from "react-router-dom";

function BackBar() {
    const history = useHistory();
    return (
        <div className={styles['back-bar']}>
            <a onClick={() => history.goBack()} />
        </div>
    );
}

export default BackBar;

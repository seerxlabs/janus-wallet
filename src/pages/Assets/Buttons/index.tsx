import {Link} from 'react-router-dom';
import styles from './index.module.scss';
import sendIcon from "/src/assets/icons/send.svg"
import receiveIcon from "/src/assets/icons/receive.svg"
import swapIcon from "/src/assets/icons/swap.svg"

export default function Buttons() {
    return (
        <div className={styles['btn-box']}>
            <a><img src={sendIcon} alt=""/><p>Receive</p></a>
            <Link to="/assets/sendSOL"><img src={receiveIcon} alt=""/><p>Send</p></Link>
            <Link to="/swap"><img src={swapIcon} alt=""/><p>Swap</p></Link>
        </div>
    );
}


import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import sendIcon from "../../../assets/icons/send.svg"
import receiveIcon from "../../../assets/icons/receive.svg"
import swapIcon from "../../../assets/icons/swap.svg"

function Buttons() {
  return (
    <div className={styles['btn-box']}>
        <Link to="/send"><img src={sendIcon} alt=""/><p>Receive</p></Link>
        <Link to="/receive"><img src={receiveIcon} alt=""/><p>Send</p></Link>
        <Link to="/swap"><img src={swapIcon} alt=""/><p>Swap</p></Link>
    </div>
  );
}

export default Buttons;

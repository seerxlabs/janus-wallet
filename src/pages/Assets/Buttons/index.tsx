import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function Buttons() {
  return (
    <div className={styles['btn-box']}>
        <Link to="/send"><img src="/src/assets/icons/receive.svg" alt=""/><p>Receive</p></Link>
        <Link to="/receive"><img src="/src/assets/icons/send.svg" alt=""/><p>Send</p></Link>
        <Link to="/swap"><img src="/src/assets/icons/swap.svg" alt=""/><p>Swap</p></Link>
    </div>
  );
}

export default Buttons;

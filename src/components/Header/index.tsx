import styles from './index.module.scss';
import iconEth from "../../assets/icons/net-eth.svg"
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className={styles['header-bar']}>
        <div className={styles['bar-main']}>
            <Link to="/wallet" className={styles['wallet-name']}>
                <i/>
                <span>MyWallet1</span>
                <a/>
            </Link>
            <Link to="/network" className={styles['net-name']}>
                <img src={iconEth} alt=""/>
                <span>EVM #1</span>
            </Link>
        </div>
    </div>
  );
}

export default Header;

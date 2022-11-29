import styles from './index.module.scss';
import iconEth from "@/assets/icons/net-eth.svg"
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className={styles['header-bar']}>
            <div className={styles['bar-main']}>
                <Link to="/wallet" className={styles['wallet-name']}>
                    <i/>
                    <b>MyWallet1</b>
                    <span/>
                </Link>
                <Link to="/settings/network" className={styles['net-name']}>
                    <img src={iconEth} alt=""/>
                    <span>EVM #1</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;

import styles from './index.module.scss';
import iconEth from "../../assets/icons/net-eth.svg"

function Header() {
  return (
    <div className={styles['header-bar']}>
        <div className={styles['bar-main']}>
            <div className={styles['wallet-name']}>
                <i/>
                <span>MyWallet1</span>
                <a/>
            </div>
            <div className={styles['net-name']}>
                <img src={iconEth} alt=""/>
                <span>EVM #1</span>
            </div>
        </div>
    </div>
  );
}

export default Header;

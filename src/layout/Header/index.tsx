import styles from './index.module.scss';

function Header() {
  return (
    <div className={styles['header-bar']}>
        <div className={styles['wallet-name']}>
            <i/>
            <span>MyWallet1</span>
            <a/>
        </div>
        <div className={styles['net-name']}>
            <img src="/src/assets/icons/net-eth.svg" alt=""/>
            <span>EVM #1</span>
        </div>
    </div>
  );
}

export default Header;

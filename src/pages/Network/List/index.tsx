import styles from './index.module.scss';
import iconUSDC from '../../../assets/icons/net-usdc.svg'
import iconETH from '../../../assets/icons/net-eth.svg'

function WalletList() {
  return (
    <ul className={styles['list-main']}>
        <li className={styles['list-item-on']}>
            <img src={iconETH} alt=""/><p>Ethereum</p><i/>
        </li>
        <li>
            <img src={iconUSDC} alt=""/><p>Solana</p><i/>
        </li>
    </ul>
  );
}

export default WalletList;

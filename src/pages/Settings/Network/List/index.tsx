import styles from './index.module.scss';
import iconUSDC from '/src/assets/icons/net-usdc.svg'
import iconETH from '/src/assets/icons/net-eth.svg'

export default function WalletList() {
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


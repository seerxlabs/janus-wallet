import styles from './index.module.scss';
import picture from './img/nft.webp'

export default function DappList() {
  return (
    <ul className={styles['list-main']}>
        <li className={styles['list-item']}>
            <img src={picture} alt=""/>
            <p><b>CyberConnect</b><span>A decentralized social graph protocol</span></p>
        </li>
        <li className={styles['list-item']}>
            <img src={picture} alt=""/>
            <p><b>X2Y2</b><span>The decentralized NFT marketplace. By the …</span></p>
        </li>
        <li className={styles['list-item']}>
            <img src={picture} alt=""/>
            <p><b>Project Galaxy</b><span>Create a new experience with Web3 …</span></p>
        </li>
        <li className={styles['list-item']}>
            <img src={picture} alt=""/>
            <p><b>Idena</b><span>Idena is the first Proof-of-Person blockchain</span></p>
        </li>
        <li className={styles['list-item']}>
            <img src={picture} alt=""/>
            <p><b>Web3 Storage</b><span>Making decentralized storage easy</span></p>
        </li>
        <li className={styles['list-item']}>
            <img src={picture} alt=""/>
            <p><b>Web3 Storage</b><span>Making decentralized storage easy</span></p>
        </li>
        <li className={styles['list-item']}>
            <img src={picture} alt=""/>
            <p><b>Web3 Storage</b><span>Making decentralized storage easy</span></p>
        </li>
        <li className={styles['list-item']}>
            <img src={picture} alt=""/>
            <p><b>Web3 Storage</b><span>Making decentralized storage easy</span></p>
        </li>
    </ul>
  );
}


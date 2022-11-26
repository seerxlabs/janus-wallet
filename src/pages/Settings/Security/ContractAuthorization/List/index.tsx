import styles from './index.module.scss';
import picture from './img/nft.webp'

export default function DappList() {
  return (
    <ul className={styles['list-main']}>
        <li className={styles['list-item']}>
            <img src={picture} alt=""/>
            <p><b>parrot.fi</b><span>&gt; 1m ago</span></p>
            <a/>
        </li>
        <li className={styles['list-item']}>
            <img src={picture} alt=""/>
            <p><b>solend.fi</b><span>&gt; 1m ago</span></p>
            <a/>
        </li>
    </ul>
  );
}


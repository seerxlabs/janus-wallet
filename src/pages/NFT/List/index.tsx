import styles from './index.module.scss';
import pictureNFT from './img/nft.webp'

function PageTitle() {
  return (
    <ul className={styles['list-main']}>
        <li className={styles['list-item']}>
            <img src={pictureNFT} alt=""/><p>1698</p>
        </li>
        <li className={styles['list-item']}>
            <img src={pictureNFT} alt=""/><p>1698</p>
        </li>
        <li className={styles['list-item']}>
            <img src={pictureNFT} alt=""/><p>1698</p>
        </li>
    </ul>
  );
}

export default PageTitle;

import styles from './index.module.scss';
import pictureNFT from './img/nft.webp'
import {Link} from "react-router-dom";

function NFTList() {
  return (
    <ul className={styles['list-main']}>
        <li className={styles['list-item']}>
            <Link to="detail"><img src={pictureNFT} alt=""/><p>1698</p></Link>
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

export default NFTList;

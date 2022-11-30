import styles from './index.module.scss';
import {Link} from "react-router-dom";

export default function WalletList() {
    return (
        <ul className={styles['list-main']}>
            <li className={styles['list-item-on']}>
                <i className={styles['wallet-1']}/>
                <p><b>MyWallet 1</b><span>0x194cd…c88c</span></p>
                <Link to="/wallet/edit"/>
            </li>
            <li>
                <i className={styles['wallet-2']}/>
                <p><b>MyWallet 2</b><span>0x194cd…c88c</span></p>
                <Link to="/wallet/edit"/>
            </li>

        </ul>
    );
}


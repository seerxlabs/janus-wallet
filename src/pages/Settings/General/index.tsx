import styles from './index.module.scss';
import iconLockWallet from '@/assets/icons/settings/lock.svg'
import iconTheme from '@/assets/icons/settings/theme.svg'
import iconLanguage from '@/assets/icons/settings/language.svg'
import iconCurrency from '@/assets/icons/settings/currency.svg'
import iconSet from '@/assets/icons/settings/set.svg'
import {Link} from "react-router-dom"

export default function GeneralSetting() {
    return (
        <div className={styles['item-box']}>
            <label>GENERAL</label>
            <ul>
                <li>
                    <Link to="/settings/unlock">
                        <img src={iconLockWallet} alt=""/>
                        <b>Lock wallet</b>
                        <p><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <img src={iconTheme} alt=""/>
                        <b>Theme</b>
                        <p><span>Auto</span><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <img src={iconLanguage} alt=""/>
                        <b>Language</b>
                        <p><span>English</span><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <img src={iconCurrency} alt=""/>
                        <b>Default currency</b>
                        <p><span>CNY</span><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="/settings/network">
                        <img src={iconSet} alt=""/>
                        <b>Set up block</b>
                        <p><i/></p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}


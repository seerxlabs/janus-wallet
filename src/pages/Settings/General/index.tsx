import styles from './index.module.scss';
import iconLockWallet from '@/assets/icons/settings/lock.svg'
import iconTheme from '@/assets/icons/settings/theme.svg'
import iconLanguage from '@/assets/icons/settings/language.svg'
import iconCurrency from '@/assets/icons/settings/currency.svg'
import iconSet from '@/assets/icons/settings/set.svg'

function GeneralSetting() {
    return (
        <div className={styles['item-box']}>
            <label>GENERAL</label>
            <ul>
                <li>
                    <p><img src={iconLockWallet} alt=""/><b>Lock wallet</b></p>
                    <a><i/></a>
                </li>
                <li>
                    <p><img src={iconTheme} alt=""/><b>Theme</b></p>
                    <a><span>Auto</span><i/></a>
                </li>
                <li>
                    <p><img src={iconLanguage} alt=""/><b>Language</b></p>
                    <a><span>English</span><i/></a>
                </li>
                <li>
                    <p><img src={iconCurrency} alt=""/><b>Default currency</b></p>
                    <a><span>CNY</span><i/></a>
                </li>
                <li>
                    <p><img src={iconSet} alt=""/><b>Set up block</b></p>
                    <a><i/></a>
                </li>
            </ul>
        </div>
    );
}

export default GeneralSetting;

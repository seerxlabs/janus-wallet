import styles from './index.module.scss';
import iconUnlockWallet from '@/assets/icons/settings/unlock.svg'
import iconLockTime from '@/assets/icons/settings/lock-time.svg'
import iconBackupWallet from '@/assets/icons/settings/wallet.svg'
import iconAuth from '@/assets/icons/settings/auth.svg'
import iconBag from '@/assets/icons/settings/bag.svg'
import iconRemove from '@/assets/icons/settings/remove.svg'
import iconReset from '@/assets/icons/settings/reset.svg'
import { Link } from "react-router-dom"

export default function SecuritySetting() {
    return (
        <div className={styles['item-box']}>
            <label>SECURITY</label>
            <ul>
                <li>
                    <Link to="/settings/changePassword">
                        <img src={iconUnlockWallet} alt=""/>
                        <b>Change password</b>
                        <p><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="/settings/changePassword">
                        <img src={iconLockTime} alt=""/>
                        <b>Lock time</b>
                        <p><span>2 hours</span><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="/settings/changePassword">
                        <img src={iconBackupWallet} alt=""/>
                        <b>Back up wallet</b>
                        <p><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="/settings/changePassword">
                        <img src={iconAuth} alt=""/>
                        <b>Contract authorization</b>
                        <p><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="/settings/changePassword">
                        <img src={iconBag} alt=""/>
                        <b>Delete Email account</b>
                        <p><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="/settings/changePassword">
                        <img src={iconRemove} alt=""/>
                        <b>Remove wallet</b>
                        <p><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="/settings/changePassword">
                        <img src={iconReset} alt=""/>
                        <b>Reset wallet</b>
                        <p><i/></p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}


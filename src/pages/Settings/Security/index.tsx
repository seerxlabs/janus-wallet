import classnames from 'classnames';
import styles from './index.module.scss';
import iconUnlockWallet from '../../../assets/icons/settings/unlock.svg'
import iconLockTime from '../../../assets/icons/settings/lock-time.svg'
import iconBackupWallet from '../../../assets/icons/settings/wallet.svg'
import iconAuth from '../../../assets/icons/settings/auth.svg'
import iconBag from '../../../assets/icons/settings/bag.svg'
import iconRemove from '../../../assets/icons/settings/remove.svg'
import iconReset from '../../../assets/icons/settings/reset.svg'

function SecuritySetting() {
    return (
        <div className={classnames(styles['item-box'])}>
            <label>SECURITY</label>
            <ul>
                <li>
                    <p><img src={iconUnlockWallet} alt=""/><b>Change password</b></p>
                    <a><i/></a>
                </li>
                <li>
                    <p><img src={iconLockTime} alt=""/><b>Lock time</b></p>
                    <a><span>2 hours</span><i/></a>
                </li>
                <li>
                    <p><img src={iconBackupWallet} alt=""/><b>Back up wallet</b></p>
                    <a><i/></a>
                </li>
                <li>
                    <p><img src={iconAuth} alt=""/><b>Contract authorization</b></p>
                    <a><i/></a>
                </li>
                <li>
                    <p><img src={iconBag} alt=""/><b>Delete Email account</b></p>
                    <a><i/></a>
                </li>
                <li>
                    <p><img src={iconRemove} alt=""/><b>Remove wallet</b></p>
                    <a><i/></a>
                </li>
                <li>
                    <p><img src={iconReset} alt=""/><b>Reset wallet</b></p>
                    <a><i/></a>
                </li>
            </ul>
        </div>
    );
}

export default SecuritySetting;

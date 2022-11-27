import styles from './index.module.scss';
import iconSite from "/src/assets/icons/settings/site.svg";
import iconDiscord from "/src/assets/icons/settings/discord.svg";
import iconTwitter from "/src/assets/icons/settings/twitter.svg";
import iconUser from "/src/assets/icons/settings/user.svg";
import iconPrivacy from "/src/assets/icons/settings/privacy.svg";
import iconVersion from "/src/assets/icons/settings/version.svg";
import {Link} from "react-router-dom"

export default function AboutSetting() {
    return (
        <div className={styles['item-box']}>
            <label>ABOUT</label>
            <ul>
                <li>
                    <Link to="">
                        <img src={iconSite} alt=""/>
                        <b>Official website</b>
                        <p><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <img src={iconDiscord} alt=""/>
                        <b>Discord</b>
                        <p><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <img src={iconTwitter} alt=""/>
                        <b>Twitter</b>
                        <p><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <img src={iconUser} alt=""/>
                        <b>User agreement</b>
                        <p><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <img src={iconPrivacy} alt=""/>
                        <b>Privacy terms</b>
                        <p><i/></p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <img src={iconVersion} alt=""/>
                        <b>Wallet version</b>
                        <p><span>1.0.1</span><i/></p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}


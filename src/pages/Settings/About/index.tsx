import styles from './index.module.scss';
import iconSite from "@/assets/icons/settings/site.svg";
import iconDiscord from "@/assets/icons/settings/discord.svg";
import iconTwitter from "@/assets/icons/settings/twitter.svg";
import iconUser from "@/assets/icons/settings/user.svg";
import iconPrivacy from "@/assets/icons/settings/privacy.svg";
import iconVersion from "@/assets/icons/settings/version.svg";

export default function AboutSetting() {
    return (
        <div className={styles['item-box']}>
            <label>ABOUT</label>
            <ul>
                <li>
                    <a href="https://januswallet.xyz/#/" target="_blank">
                        <img src={iconSite} alt=""/>
                        <b>Official website</b>
                        <p><i/></p>
                    </a>
                </li>
                <li>
                    <a href="https://januswallet.xyz/#/" target="_blank">
                        <img src={iconDiscord} alt=""/>
                        <b>Discord</b>
                        <p><i/></p>
                    </a>
                </li>
                <li>
                    <a href="https://januswallet.xyz/#/" target="_blank">
                        <img src={iconTwitter} alt=""/>
                        <b>Twitter</b>
                        <p><i/></p>
                    </a>
                </li>
                <li>
                    <a href="https://januswallet.xyz/#/" target="_blank">
                        <img src={iconUser} alt=""/>
                        <b>User agreement</b>
                        <p><i/></p>
                    </a>
                </li>
                <li>
                    <a href="https://januswallet.xyz/#/" target="_blank">
                        <img src={iconPrivacy} alt=""/>
                        <b>Privacy terms</b>
                        <p><i/></p>
                    </a>
                </li>
                <li>
                    <a href="https://januswallet.xyz/#/" target="_blank">
                        <img src={iconVersion} alt=""/>
                        <b>Wallet version</b>
                        <p><span>1.0.1</span><i/></p>
                    </a>
                </li>
            </ul>
        </div>
    );
}


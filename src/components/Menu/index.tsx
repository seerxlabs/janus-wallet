import styles from './index.module.scss';
import {Link, useLocation} from 'react-router-dom';
import iconAssets from "@/assets/icons/menu-assets.svg";
import iconAssetsHover from "@/assets/icons/menu-assets-hover.svg";
import iconNft from "@/assets/icons/menu-nft.svg";
import iconNftHover from "@/assets/icons/menu-nft-hover.svg";
import iconDapp from "@/assets/icons/menu-dapp.svg";
import iconDappHover from "@/assets/icons/menu-dapp-hover.svg";
import iconSwap from "@/assets/icons/menu-swap.svg";
import iconSwapHover from "@/assets/icons/menu-swap-hover.svg";
import iconSettings from "@/assets/icons/menu-settings.svg";
import iconSettingsHover from "@/assets/icons/menu-settings-hover.svg";


function Menu() {
    const location = useLocation();
    return (
        <div className={styles['menu-bar']}>
            <Link to="/assets">
                <img src={location.pathname === "/assets" || location.pathname === "/" ? iconAssetsHover : iconAssets} alt=""/>
            </Link>
            <Link to="/nft">
                <img src={location.pathname === "/nft" ? iconNftHover : iconNft} alt=""/>
            </Link>
            <Link to="/dapp">
                <img src={location.pathname === "/dapp" ? iconDappHover : iconDapp} alt=""/>
            </Link>
            <Link to="/swap">
                <img src={location.pathname === "/swap" ? iconSwapHover : iconSwap} alt=""/>
            </Link>
            <Link to="/settings">
                <img src={location.pathname === "/settings" ? iconSettingsHover : iconSettings} alt=""/>
            </Link>
        </div>
    );
}

export default Menu;

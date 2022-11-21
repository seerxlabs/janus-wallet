import styles from './index.module.scss';
import {Link, useLocation} from 'react-router-dom';


function Menu() {
    const location = useLocation();
    return (
    <div className={styles['menu-bar']}>
        <Link to="/assets">
            <img src={location.pathname === "/assets" || location.pathname === "/" ?
                "/src/assets/icons/menu-assets-hover.svg" :
                "/src/assets/icons/menu-assets.svg"
            } alt=""/>
        </Link>
        <Link to="/nft">
            <img src={location.pathname === "/nft" ?
                "/src/assets/icons/menu-nft-hover.svg" :
                "/src/assets/icons/menu-nft.svg"
            } alt=""/>
        </Link>
        <Link to="/dapp">
            <img src={location.pathname === "/dapp" ?
                "/src/assets/icons/menu-dapp-hover.svg" :
                "/src/assets/icons/menu-dapp.svg"
            } alt=""/>
        </Link>
        <Link to="/swap">
            <img src={location.pathname === "/swap" ?
                "/src/assets/icons/menu-swap-hover.svg" :
                "/src/assets/icons/menu-swap.svg"
            } alt=""/>
        </Link>
        <Link to="/settings">
            <img src={location.pathname === "/settings" ?
                "/src/assets/icons/menu-settings-hover.svg" :
                "/src/assets/icons/menu-settings.svg"
            } alt=""/>
        </Link>
    </div>
  );
}

export default Menu;

import styles from "./index.module.scss";
import IconWarnBlue from "@/assets/icons/warning-blue.svg"
import IconWalletGreen from "@/assets/icons/wallet.svg"
import IconSafeYellow from "@/assets/icons/safe.svg"
import IconWarnRed from "@/assets/icons/warning-red.svg"

export default function Step2() {
    return (
        <div className={styles['step-main']}>
            <div className={styles['step-container']}>
                <h2>Read the following content carefully, then show the seed phrase.</h2>
                <ul>
                    <li className={styles['color-primary']}>
                        <img src={IconWarnBlue} alt=""/>
                        <p>All it takes is one seed phrase to give you full access to your wallet and assets in it.</p>
                    </li>
                    <li className={styles['color-success']}>
                        <img src={IconWalletGreen} alt=""/>
                        <p>All it takes is one seed phrase to give you full access to your wallet and assets in it.</p>
                    </li>
                    <li className={styles['color-warn']}>
                        <img src={IconSafeYellow} alt=""/>
                        <p>All it takes is one seed phrase to give you full access to your wallet and assets in it.</p>
                    </li>
                    <li className={styles['color-error']}>
                        <img src={IconWarnRed} alt=""/>
                        <p>All it takes is one seed phrase to give you full access to your wallet and assets in it.</p>
                    </li>
                </ul>
                <button>Show seed phrase</button>
            </div>
        </div>
    );
}

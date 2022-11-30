import styles from "./index.module.scss";
import IconStep1 from "@/assets/icons/step-1-on.svg"
import IconStep2 from "@/assets/icons/step-2.svg"
import WebBack from "@/components/WebBack";

export default function Step1() {
    return (
        <div className={styles['step-main']}>
            <WebBack/>
            <div className={styles['step-container']}>
                <div className={styles['step-name']}>
                    <p><img src={IconStep1} alt=""/><b>Set up password</b></p>
                    <i/>
                    <p><img src={IconStep2} alt=""/><b className={styles['gray']}>Back up seed phrase</b></p>
                </div>
                <div className={styles['form-box']}>
                    <form>
                        <div className={styles['input-box']}>
                            <input type="text"/><a/>
                        </div>
                        <div className={styles['input-box']}>
                            <input type="text"/><a/>
                        </div>
                        <button>Continue</button>
                    </form>
                    <div className={styles['tips']}>
                        <p>Your wallet data will be encrypted with this password in order to complete the executions such as unlocking your wallet and confirming the transactions.</p>
                        <p>The password is stored securely on the device you are currently using and we cannot recover it for you, so be sure to remember it.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

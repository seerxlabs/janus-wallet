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
                    <p><img src={IconStep1} alt=""/><b>Verify Email address </b></p>
                    <i/>
                    <p><img src={IconStep2} alt=""/><b className={styles['gray']}>Verify Password</b></p>
                </div>
                <div className={styles['form-box']}>
                    <form>
                        <div className={styles['input-box']}>
                            <input type="text" placeholder={'Enter email'} />
                        </div>
                        <div className={styles['input-box']}>
                            <input className={styles['short']} type="text" placeholder={'Verification code'} />
                            <a>Get the code</a>
                        </div>
                        <button>Continue</button>
                    </form>
                    <div className={styles['tips']}>
                        <p>This is the email you used when creating the wallet on Janus.</p>
                        <p>When you log in off-site or lost your local private key file, identity verification is needed to restore your wallet assets.</p>
                        <p>If you have chosen to delete the Email account, use the backup seed phrase to import the wallet please.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

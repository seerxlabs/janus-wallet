import styles from "./index.module.scss";
import IconStep1 from "@/assets/icons/completed.svg"
import IconStep2 from "@/assets/icons/step-2-on.svg"
import WebBack from "@/components/WebBack";

export default function Step2() {
    return (
        <div className={styles['step-main']}>
            <WebBack/>
            <div className={styles['step-container']}>
                <div className={styles['step-name']}>
                    <p><img src={IconStep1} alt=""/><b className={styles['gray']}>Verify Email address</b></p>
                    <i/>
                    <p><img src={IconStep2} alt=""/><b>Verify Password</b></p>
                </div>
                <div className={styles['form-box']}>
                    <form>
                        <div className={styles['input-box']}>
                            <input type="text" placeholder={'Please enter password'} /><a/>
                        </div>
                        <button>Continue</button>
                    </form>
                    <div className={styles['tips']}>
                        <p>Please enter the password you used to create the Janus wallet.</p>
                        <p>If you forget it, we will not be able to restore the wallet for you.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

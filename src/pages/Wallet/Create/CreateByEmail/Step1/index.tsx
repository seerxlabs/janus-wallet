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
                    <p><img src={IconStep1} alt=""/><b>Add Email address</b></p>
                    <i/>
                    <p><img src={IconStep2} alt=""/><b className={styles['gray']}>Set up password</b></p>
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
                        <p>This is a wallet creating method recommended by Janus for new wallet users.</p>
                        <p>When you are familiar with how to operate the wallet, it is recommend that you delete your Email account and use the seed phrase to import the wallet instead.</p>
                        <p>We can not record or save your private key, nor can we access it, rest assured when you use the wallet！</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

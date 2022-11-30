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
                    <p><img src={IconStep1} alt=""/><b>Import Wallet</b></p>
                    <i/>
                    <p><img src={IconStep2} alt=""/><b className={styles['gray']}>Set up password</b></p>
                </div>
                <div className={styles['form-box']}>
                    <form>
                        <div className={styles['textarea-box']}>
                            <textarea rows={4} placeholder={'Enter your seed phrase/private keys'} />
                        </div>
                        <button>Continue</button>
                    </form>
                    <div className={styles['tips']}>
                        <label>What is the seed phrase?</label>
                        <p>A  seed phrase consists of 12, 18 or 24 words, these words help you restore your wallet.</p>
                        <label>Is it safe to input the seed phrase or private keys?</label>
                        <p>Yes. The input content will be stored locally. Remember to never leave your device or let anyone touch your device without your personal authorization.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

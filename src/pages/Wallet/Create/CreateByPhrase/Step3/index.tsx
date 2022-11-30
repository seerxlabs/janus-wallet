import styles from "./index.module.scss";
import IconCompleted from "@/assets/icons/completed.svg"
import IconStep2 from "@/assets/icons/step-2-on.svg"
import WebBack from "@/components/WebBack";
import copy from 'copy-to-clipboard';
import message from "@/components/Message";

export default function Step3() {
    return (
        <div className={styles['step-main']}>
            <WebBack/>
            <div className={styles['step-container']}>
                <div className={styles['step-name']}>
                    <p><img src={IconCompleted} alt=""/><b className={styles['gray']}>Set up password</b></p>
                    <i/>
                    <p><img src={IconStep2} alt=""/><b>Back up seed phrase</b></p>
                </div>
                <div className={styles['info-box']}>
                    <div className={styles['words-box']}>
                        <div className={styles['word-list']}>
                            <ul>
                                <li><label>1.</label><p>sample</p></li>
                                <li><label>2.</label><p>sample</p></li>
                                <li><label>3.</label><p>sample</p></li>
                                <li><label>4.</label><p>sample</p></li>
                                <li><label>5.</label><p>sample</p></li>
                                <li><label>6.</label><p>sample</p></li>
                            </ul>
                            <ul>
                                <li><label>7.</label><p>sample</p></li>
                                <li><label>8.</label><p>sample</p></li>
                                <li><label>9.</label><p>sample</p></li>
                                <li><label>10.</label><p>sample</p></li>
                                <li><label>11.</label><p>sample</p></li>
                                <li><label>12.</label><p>sample</p></li>
                            </ul>
                        </div>
                        <div className={styles['copy']}>
                            <p>Copy all</p>
                            <a onClick={() => {
                                copy('123');
                                message.success('Copied');
                            }}/>
                        </div>
                        <button>I’ve saved the seed phrase</button>
                    </div>
                    <div className={styles['tips']}>
                        <p>Please save the seed phrase securely</p>
                        <p>1. All it takes is one seed phrase to give you full access to your wallet and assets in it.</p>
                        <p>2. The seed phrase helps you to retrieve your wallet If you forget your password.</p>
                        <p>3. Janus will never ask you for your seed phrase.</p>
                        <p>4. Never share it with anyone.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

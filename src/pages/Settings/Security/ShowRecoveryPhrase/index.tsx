import styles from './index.module.scss';
import IconWaning from '@/assets/icons/warn.svg'
import BackBar from '@/components/BackBar';
import copy from 'copy-to-clipboard';
import message from "@/components/Message";

export default function ShowRecoveryPhrase() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <div className={styles['word-main']}>
                    <img src={IconWaning} alt=""/>
                    <h2>Recovery phrase</h2>
                    <div className={styles['note-box']}>
                        <p><b>Note:</b> If someone gets your recovery phrase, they have full control of your wallet</p>
                    </div>
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
                    <div className={styles['btn-box']}>
                        <button className={styles['copy']} onClick={() => {
                            copy('123');
                            message.success('Copied');
                        }}>Copy</button>
                        <button className={styles['close']}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


import styles from './index.module.scss';
import IconWaning from '@/assets/icons/warn.svg'
import BackBar from '@/components/BackBar';
import copy from 'copy-to-clipboard';
import message from "@/components/Message";

export default function ShowPrivateKey() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <div className={styles['key-main']}>
                    <img src={IconWaning} alt=""/>
                    <h2>Private key</h2>
                    <div className={styles['note-box']}>
                        <p><b>Note: </b>If someone gets your private key, they have full control of your wallet</p>
                    </div>
                    <div className={styles['key-box']}>
                       <p>4fJgoAcj1MsakrHr2eF1BCTTBzduoNrz6KvqBsb2e9id7D275SKEJGyQrEyJAbBq3Qvx9SdhF1P7DZEpb27HWbBz</p>
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


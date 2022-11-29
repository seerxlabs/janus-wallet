import message from '@/components/Message/message';
import copy from 'copy-to-clipboard';
import styles from './index.module.scss';

export default function Dashboard() {
    return (
        <div className={styles['main']}>
            <div className={styles['backup']}>
                <i/>
                <p>
                    <b>Back up the seed phrase</b>
                    <span>Improve security and open more privileges!</span>
                </p>
                <a/>
            </div>
            <p className={styles['total-assets']}><b>$</b><span>9,887.64</span></p>
            <p className={styles['address']}>
                <span>0x194cd…c88c</span>
                <i onClick={() => {
                    copy('123');
                    message.success('Copied');
                }}/>
            </p>
        </div>
    );
}

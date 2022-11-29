import styles from './index.module.scss';
import IconETH from '@/assets/icons/net-eth.svg'
import PageTitle from '@/components/PageTitle';
import BackBar from '@/components/BackBar';
import SOLSendingModal from "@/pages/Assets/SendSOL/Sending";

export default function SendConfirm() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <PageTitle sub={false} name={'Confirm to send'}/>
                <div className={styles['confirm-main']}>
                    <img src={IconETH} alt=""/>
                    <h2><span>0.005600</span><b>ETH</b></h2>
                    <div className={styles['info-box']}>
                        <p><b>Address</b><span>0xA0BdEa……4C1977</span></p>
                        <p><b>Network fee</b><span>4.0 USDT</span></p>
                    </div>
                    <div className={styles['btn-box']}>
                        <button className={styles['cancel']}>Cancel</button>
                        <SOLSendingModal tips={'Sending …'} trigger={
                            <button className={styles['send']}>Send</button>
                        }/>
                    </div>
                </div>
            </div>
        </div>
    );
}


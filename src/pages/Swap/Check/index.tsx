import styles from './index.module.scss';
import BackBar from '@/components/BackBar';
import PageTitle from "@/components/PageTitle";
import SwappingModal from "@/pages/Swap/Swapping";

export default function CheckOrder() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <PageTitle sub={false} name={'Check order'}/>
                <div className={styles['check-main']}>
                    <div className={styles['info-box']}>
                        <p><b><i>Pay</i><label>$ 0.56891</label></b><span>0.01757 SOL</span></p>
                        <p><b><i>Receive</i></b><span>0.56537 USDC</span></p>
                    </div>
                    <div className={styles['info-box']}>
                        <p><b><i>Lowest price</i></b><span>1 SOL ≈ 32.17873 USDC</span></p>
                        <p><b><i>Provider</i></b><span>Orca (Whirlpools)</span></p>
                        <p><b><i>Price shock</i></b><span>0.05%</span></p>
                        <p><b><i>Estimated fee</i></b><span>$ 0.00016</span></p>
                        <h6>The quote includes 0.85% platform fee</h6>
                    </div>
                    <div className={styles['btn-box']}>
                        <button className={styles['cancel']}>Cancel</button>
                        <SwappingModal tips={'Swapping ...'} trigger={
                            <button className={styles['swap']}>Swap</button>
                        }/>
                    </div>
                </div>
            </div>
        </div>
    );
}


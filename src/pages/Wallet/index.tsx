import styles from './index.module.scss';
import BackBar from '@/components/BackBar';
import PageTitle from '@/components/PageTitle';
import List from './List';

export default function WalletPage() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <PageTitle sub={false} name={'My Wallet'}/>
                <List/>
                <div className={styles['make-btn']}>
                    <a target="_blank" href="chrome-extension://plpcpcnjidpihgooeejmppegnalcholf/#/wallet/create" className={styles['create']}>Create Wallet</a>
                    <a target="_blank" href="chrome-extension://plpcpcnjidpihgooeejmppegnalcholf/#/wallet/import" className={styles['import']}>Import Wallet</a>
                </div>
            </div>
        </div>
    );
}


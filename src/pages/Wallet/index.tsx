import styles from './index.module.scss';
import BackBar from '@/components/BackBar';
import PageTitle from '@/components/PageTitle';
import List from './List';

function WalletPage() {
    return (
        <div className={styles['main-page']}>
            <BackBar />
            <PageTitle ext={false} sub={false} name={'My Wallet'}/>
            <List />
            <div className={styles['make-btn']}>
                <button className={styles['create']}>Create Wallet</button>
                <button className={styles['import']}>Import Wallet</button>
            </div>
        </div>
    );
}

export default WalletPage;

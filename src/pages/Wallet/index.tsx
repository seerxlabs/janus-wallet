import styles from './index.module.scss';
import BackBar from '../../components/BackBar';
import PageTitle from '../../components/PageTitle';
import List from './List';

export default function WalletPage() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <PageTitle sub={false} name={'My Wallet'}/>
            <List/>
            <div className={styles['make-btn']}>
                <button className={styles['create']}>Create Wallet</button>
                <button className={styles['import']}>Import Wallet</button>
            </div>
        </div>
    );
}


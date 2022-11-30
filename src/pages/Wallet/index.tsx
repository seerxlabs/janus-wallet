import styles from './index.module.scss';
import BackBar from '@/components/BackBar';
import PageTitle from '@/components/PageTitle';
import List from './List';

export default function WalletPage() {
    function jumpToCreate () {
        chrome.tabs.create({ url: "#/wallet/create" })
    }
    function jumpToImport () {
        chrome.tabs.create({ url: "#/wallet/import" })
    }
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <PageTitle sub={false} name={'My Wallet'}/>
                <List/>
                <div className={styles['make-btn']}>
                    <a className={styles['create']} onClick={jumpToCreate}>Create Wallet</a>
                    <a className={styles['import']} onClick={jumpToImport}>Import Wallet</a>
                </div>
            </div>
        </div>
    );
}


import styles from './index.module.scss';
import BackBar from '@/components/BackBar';
import PageTitle from '@/components/PageTitle';
import Form from './Form';

export default function SendNFTPage() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <PageTitle sub={false} name={'Send NFT'}/>
                <Form/>
            </div>
        </div>
    );
}


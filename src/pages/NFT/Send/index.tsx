import styles from './index.module.scss';
import BackBar from '@/components/BackBar';
import PageTitle from '@/components/PageTitle';
import Form from './Form';

export default function SendNFTPage() {
    return (
        <div className={styles['page-main']}>
            <BackBar />
            <PageTitle ext={false} sub={false} name={'Send NFT'}/>
            <Form />
        </div>
    );
}


import styles from './index.module.scss';
import BackBar from '@/components/BackBar';
import PageTitle from '@/components/PageTitle';
import Form from './Form';

export default function SendSOLPage() {
    return (
        <div className={styles['page-main']}>
            <BackBar />
            <PageTitle sub={false} name={'Send SOL'}/>
            <Form />
        </div>
    );
}


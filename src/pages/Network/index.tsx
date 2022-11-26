import styles from './index.module.scss';
import BackBar from '@/components/BackBar';
import PageTitle from '@/components/PageTitle';
import List from './List';

export default function Network() {
    return (
        <div className={styles['page-main']}>
            <BackBar />
            <PageTitle ext={false} sub={'Switch between different network.'} name={'Network'}/>
            <List />
        </div>
    );
}


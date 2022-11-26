import styles from './index.module.scss';
import BackBar from '@/components/BackBar';
import PageTitle from '@/components/PageTitle';
import List from './List';

function Network() {
    return (
        <div className={styles['main-page']}>
            <BackBar />
            <PageTitle ext={false} sub={'Switch between different network.'} name={'Network'}/>
            <List />
        </div>
    );
}

export default Network;

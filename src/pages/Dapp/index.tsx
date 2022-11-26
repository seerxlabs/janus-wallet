import styles from './index.module.scss';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import PageTitle from '@/components/PageTitle';
import List from './List';

function DappPage() {
    return (
        <div className={styles['main-page']}>
            <Header />
            <PageTitle ext={false} sub={false} name={'Browse Apps'}/>
            <List/>
            <Menu />
        </div>
    );
}

export default DappPage;

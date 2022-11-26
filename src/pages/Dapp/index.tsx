import styles from './index.module.scss';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import PageTitle from '@/components/PageTitle';
import List from './List';

export default function DappPage() {
    return (
        <div className={styles['page-main']}>
            <Header />
            <div className={styles['page-content']}>
                <PageTitle ext={false} sub={false} name={'Browse Apps'}/>
                <List/>
            </div>
            <Menu />
        </div>
    );
}


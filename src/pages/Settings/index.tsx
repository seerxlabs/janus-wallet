import styles from './index.module.scss';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import PageTitle from '@/components/PageTitle';
import General from './General';
import Security from './Security';
import About from './About';

export default function SettingsPage() {
    return (
        <div className={styles['page-main']}>
            <Header />
            <PageTitle sub={false} name={'Setting'}/>
            <General />
            <Security />
            <About />
            <Menu />
        </div>
    );
}


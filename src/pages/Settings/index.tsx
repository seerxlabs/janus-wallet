import classnames from 'classnames';
import styles from './index.module.scss';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import General from './General';
import Security from './Security';
import About from './About';

function SettingsPage() {
    return (
        <div className={classnames(styles['main-page'])}>
            <Header />
            <PageTitle ext={false} sub={false} name={'Setting'}/>
            <General />
            <Security />
            <About />
            <Menu />
        </div>
    );
}

export default SettingsPage;

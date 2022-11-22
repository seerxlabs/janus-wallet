import classnames from 'classnames';
import styles from './index.module.scss';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

function SettingsPage() {
    return (
        <div className={classnames(styles['main-page'])}>
            <Header />
            <Menu />
        </div>
    );
}

export default SettingsPage;

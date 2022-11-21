import classnames from 'classnames';
import styles from './index.module.scss';
import Header from '../../layout/Header';
import Menu from '../../layout/Menu';

function DappPage() {
    return (
        <div className={classnames(styles['main-page'])}>
            <Header />
            <Menu />
        </div>
    );
}

export default DappPage;

import classnames from 'classnames';
import styles from './index.module.scss';
import Header from '../../layout/Header';
import Menu from '../../layout/Menu';
import PageTitle from '../../components/PageTitle';
import NFTList from './List';

function NFTPage() {
    return (
        <div className={classnames(styles['main-page'])}>
            <Header />
            <PageTitle />
            <NFTList />
            <Menu />
        </div>
    );
}

export default NFTPage;

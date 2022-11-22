import classnames from 'classnames';
import styles from './index.module.scss';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';

function DappPage() {
    return (
        <div className={classnames(styles['main-page'])}>
            <Header />
            <PageTitle ext={false} sub={false} name={'Browse Apps'}/>
            <Menu />
        </div>
    );
}

export default DappPage;

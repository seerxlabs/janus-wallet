import classnames from 'classnames';
import styles from './index.module.scss';
import Header from '../../layout/Header';
import Dashboard from './Dashboard';
import Buttons from './Buttons';
import TokenList from './TokenList';
import Menu from '../../layout/Menu';

function AssetsPage() {
  return (
    <div className={classnames(styles['main-page'])}>
        <Header />
        <Dashboard />
        <Buttons />
        <TokenList />
        <Menu />
    </div>
  );
}

export default AssetsPage;

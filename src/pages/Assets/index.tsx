import styles from './index.module.scss';
import Header from '@/components/Header';
import Dashboard from './Dashboard';
import Buttons from './Buttons';
import TokenList from './TokenList';
import Menu from '@/components/Menu';

function AssetsPage() {
  return (
    <div className={styles['main-page']}>
        <Header />
        <Dashboard />
        <Buttons />
        <TokenList />
        <Menu />
    </div>
  );
}

export default AssetsPage;

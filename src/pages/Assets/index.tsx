import styles from './index.module.scss';
import Header from '@/components/Header';
import Dashboard from './Dashboard';
import Buttons from './Buttons';
import TokenList from './TokenList';
import Menu from '@/components/Menu';
import {Link} from 'react-router-dom';

export default function AssetsPage() {
    return (
        <div className={styles['page-main']}>
            <Header/>
            <div className={styles['page-content']}>
                <Dashboard/>
                <Buttons/>
                <TokenList/>
                <Link to="/assets/manageToken" className={styles['manage-btn']}><i/><span>Manage Token List</span></Link>
            </div>
            <Menu/>
        </div>
    );
}

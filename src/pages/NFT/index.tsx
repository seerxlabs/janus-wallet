import classnames from 'classnames';
import styles from './index.module.scss';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import NFTList from './List';

function NFTPage() {
    return (
        <div className={classnames(styles['main-page'])}>
            <Header />
            <PageTitle ext={true} sub={'My NFTs (3)'} name={'NFT'}/>
            <NFTList />
            <Menu />
        </div>
    );
}

export default NFTPage;

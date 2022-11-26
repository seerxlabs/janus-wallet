import styles from './index.module.scss';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import PageTitle from '@/components/PageTitle';
import NFTList from './List';

export default function NFTPage() {
    return (
        <div className={styles['page-main']}>
            <Header />
            <PageTitle ext={true} sub={'My NFTs (3)'} name={'NFT'}/>
            <NFTList />
            <Menu />
        </div>
    );
}


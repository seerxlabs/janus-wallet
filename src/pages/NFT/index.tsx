import styles from './index.module.scss';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import NFTList from './List';

export default function NFTPage() {
    return (
        <div className={styles['page-main']}>
            <Header/>
            <div className={styles['page-content']}>
                <div className={styles['page-title']}>
                    <div className={styles['title-content']}>
                        <h1 className={styles['main-title']}>NFT</h1>
                        <h5 className={styles['sub-title']}>My NFTs (3)</h5>
                    </div>
                    <div className={styles['ext']}><i/><span>Mint</span></div>
                </div>
                <NFTList/>
            </div>
            <Menu/>
        </div>
    );
}


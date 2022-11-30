import styles from './index.module.scss';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import NFTList from './List';
import NFTMintingModal from "@/pages/NFT/Mint/Minting";
// import NFTMintSuccessModal from "@/pages/NFT/Mint/Success";

export default function NFTPage() {
    return (
        <div className={styles['page-main']}>
            <Header/>
            <div className={styles['page-container']}>
                <div className={styles['page-title']}>
                    <div className={styles['title-content']}>
                        <h1 className={styles['main-title']}>NFT</h1>
                        <h5 className={styles['sub-title']}>My NFTs (3)</h5>
                    </div>
                    <NFTMintingModal tips={'Minting NFT ...'} trigger={
                        <div className={styles['ext']}><i/><span>Mint</span></div>
                    }/>
                    {/*<NFTMintSuccessModal tips={'NFT mint successfully'} trigger={1}/>*/}
                </div>
                <NFTList/>
            </div>
            <Menu/>
        </div>
    );
}


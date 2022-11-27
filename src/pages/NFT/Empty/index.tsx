import styles from './index.module.scss';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import PageTitle from '@/components/PageTitle';
import iconNFTEmpty from "@/assets/icons/nft-none.svg"

export default function NFTEmptyPage() {
    return (
        <div className={styles['page-main']}>
            <Header />
            <div className={styles['page-content']}>
                <PageTitle sub={false} name={'NFT'}/>
                <div className={styles['empty-tip']}>
                    <img src={iconNFTEmpty} alt=""/>
                    <h1>You don’t own a NFT yet</h1>
                    <h6>The NFT you owned will be displayed here. Mint genesis NFT for a chance of getting airdrop from Sui ecosystem</h6>
                    <button>Mint NFT</button>
                </div>
            </div>
            <Menu />
        </div>
    );
}


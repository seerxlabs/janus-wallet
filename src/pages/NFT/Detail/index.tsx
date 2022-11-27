import styles from './index.module.scss';
import pictureNFT from './img/nft.webp'
import PageTitle from '@/components/PageTitle';
import BackBar from '@/components/BackBar';

export default function NFTDetail() {
  return (
      <div className={styles['detail-main']}>
          <BackBar/>
          <PageTitle sub={false} name={'NFT Details'}/>
          <div className={styles['page-main']}>
              <img className={styles['nft-body']} src={pictureNFT} alt=""/>
              <div className={styles['sd-punk']}>
                  <p>
                      <b>SdPunk #3319</b>
                      <span>ID: 0x495f...7b5e</span>
                  </p>
                  <button>Send</button>
              </div>
              <div className={styles['description']}>
                  <label>Description</label>
                  <p>NFT created by Janus.</p>
              </div>
              <div className={styles['details']}>
                  <label>Details</label>
                  <div className={styles['info']}>
                      <div className={styles['item']}>
                          <b>Contract address</b><span>0x495f...7b5e</span>
                      </div>
                      <div className={styles['item']}>
                          <b>Token ID</b><span>6613722017679184…</span>
                      </div>
                      <div className={styles['item']}>
                          <b>Token</b><span>ERC-721</span>
                      </div>
                      <div className={styles['item']}>
                          <b>Blockchain</b><span>Ethereum</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}


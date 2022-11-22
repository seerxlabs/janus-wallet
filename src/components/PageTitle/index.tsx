import styles from './index.module.scss';

function PageTitle() {
  return (
    <div className={styles['page-title']}>
        <div className={styles['title-content']}>
            <h1 className={styles['main-title']}>NFT</h1>
            <h5 className={styles['sub-title']}>My NFTs (3)</h5>
        </div>
        <div className={styles['ext']}><i/><span>Mint</span></div>
    </div>
  );
}

export default PageTitle;

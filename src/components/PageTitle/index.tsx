import styles from './index.module.scss';

function PageTitle(props: { name: string, sub: boolean, ext: boolean }) {
  return (
    <div className={styles['page-title']}>
        <div className={styles['title-content']}>
            <h1 className={styles['main-title']}>{props.name}</h1>
            {props.sub ? <h5 className={styles['sub-title']}>My NFTs (3)</h5>:''}
        </div>
        {props.ext ? <div className={styles['ext']}><i/><span>Mint</span></div>:''}
    </div>
  );
}

export default PageTitle;

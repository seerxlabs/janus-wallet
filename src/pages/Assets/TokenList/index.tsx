import styles from './index.module.scss';

const TokenList = () => {
  return (
    <div className={styles['token-list']}>
        <div className={styles['item']}>
            <img src="/src/assets/icons/net-eth.svg" alt=""/>
            <div className={styles['net-name']}>
                <b>Ethereum</b>
                <p>
                    <span>$1,585.36</span>
                    <span className={styles['data-up']}>+2.43%</span>
                </p>
            </div>
            <div className={styles['net-assets']}>
                <b>942.5615 TRX</b>
                <span>$58.93</span>
            </div>
        </div>
        <div className={styles['item']}>
            <img src="/src/assets/icons/net-tron.svg" alt=""/>
            <div className={styles['net-name']}>
                <b>Ethereum</b>
                <p>
                    <span>$1,585.36</span>
                    <span className={styles['data-down']}>-1.43%</span>
                </p>
            </div>
            <div className={styles['net-assets']}>
                <b>942.5615 TRX</b>
                <span>$58.93</span>
            </div>
        </div>
    </div>
  );
};

export default TokenList;

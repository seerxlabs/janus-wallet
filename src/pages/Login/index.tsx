import styles from "./index.module.scss";

export default function LoginPage() {
  return (
    <div className={styles['main-page']}>
      <div className={styles['janus-title']}>Janus Wallet</div>
      <div className={styles['create-new-btn']}>Create New</div>
      <div className={styles['import-wallet-btn']}>Import Wallet</div>
    </div>
  );
}

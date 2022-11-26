import styles from './index.module.scss';

export default function SendForm() {
    return (
        <div className={styles['form-box']}>
            <div className={styles['form-item']}>
                <label>Contract Address</label>
                <div className={styles['textarea-box']}>
                    <textarea placeholder='Enter or paste contract Address'/>
                </div>
            </div>
            <div className={styles['form-item']}>
                <label>Token Symbol</label>
                <div className={styles['input-box']}>
                    <input placeholder=''/>
                </div>
            </div>
            <div className={styles['form-item']}>
                <label>Decimal</label>
                <div className={styles['input-box']}>
                    <input placeholder=''/>
                </div>
            </div>
            <div className={styles['submit-btn']}>
                <button className={styles['add']}>Add</button>
            </div>
        </div>
    );
}


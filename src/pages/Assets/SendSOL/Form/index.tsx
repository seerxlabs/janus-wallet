import styles from './index.module.scss';

export default function SendForm() {
    return (
        <div className={styles['form-box']}>
            <div className={styles['form-item']}>
                <label>Address</label>
                <div className={styles['textarea-box']}>
                    <textarea placeholder='Enter or paste Address' rows={4}/>
                </div>
            </div>
            <div className={styles['form-item']}>
                <label>Amount</label>
                <div className={styles['input-box']}>
                    <input placeholder='Enter Amount'/>
                    <div className={styles['input-ext']}><span>SOL</span><b>Max</b></div>
                </div>
            </div>
            <div className={styles['submit-btn']}>
                <button className={styles['cancel']}>Cancel</button>
                <button className={styles['next']}>Next</button>
            </div>
        </div>
    );
}


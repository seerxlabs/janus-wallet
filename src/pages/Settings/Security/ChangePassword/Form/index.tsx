import styles from './index.module.scss';

export default function SendForm() {
    return (
        <div className={styles['form-box']}>
            <h1>Set up password</h1>
            <h6>You are the only person who can unlock the wallet</h6>
            <div className={styles['form-item']}>
                <label>Password</label>
                <div className={styles['input-box']}>
                    <input placeholder='Set up password'/><a/>
                </div>
            </div>
            <div className={styles['form-item']}>
                <label>Confirm password</label>
                <div className={styles['input-box']}>
                    <input placeholder='Confirm password'/><a/>
                </div>
            </div>
            <div className={styles['submit-btn']}>
                <button className={styles['confirm']}>Confirm</button>
            </div>
        </div>
    );
}


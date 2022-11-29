import styles from './index.module.scss';
import BackBar from "@/components/BackBar";

export default function VerifyPassword() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <h1>Verify Password</h1>
                <h6>Verify your password to continue</h6>
                <div className={styles['input-box']}>
                    <input placeholder={'Enter your password'}/><i/>
                </div>
                <button>Continue</button>
            </div>
        </div>
    );
}


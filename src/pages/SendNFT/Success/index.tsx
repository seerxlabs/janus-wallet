import classnames from 'classnames';
import styles from './index.module.scss';

function SendSOLSuccess() {
    return (
        <div className={classnames(styles['page-main'])}>
            <i/>
            <h1>Send successfully</h1>
            <h6>SdPunk #3319</h6>
            <button>Got it</button>
        </div>
    );
}

export default SendSOLSuccess;

import classnames from 'classnames';
import styles from './index.module.scss';

function SendSOLSuccess() {
    return (
        <div className={classnames(styles['page-main'])}>
            <i/>
            <h1>Send successfully</h1>
            <h6>- 20.00223 SOL</h6>
            <button>Close</button>
            <button>Details</button>
        </div>
    );
}

export default SendSOLSuccess;

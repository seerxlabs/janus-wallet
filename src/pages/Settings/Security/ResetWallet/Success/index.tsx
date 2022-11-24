import classnames from 'classnames';
import styles from './index.module.scss';

function ResetWalletSuccess() {
    return (
        <div className={classnames(styles['page-main'])}>
            <i/>
            <h1>Reset successfully</h1>
            <h6>Click the button below to create or import a wallet</h6>
            <button>Create / Import wallet</button>
        </div>
    );
}

export default ResetWalletSuccess;

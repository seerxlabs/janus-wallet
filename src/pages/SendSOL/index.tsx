import classnames from 'classnames';
import styles from './index.module.scss';
import BackBar from '../../components/BackBar';
import PageTitle from '../../components/PageTitle';
import Form from './Form';

function SendSOLPage() {
    return (
        <div className={classnames(styles['main-page'])}>
            <BackBar />
            <PageTitle ext={false} sub={false} name={'Send SOL'}/>
            <Form />
        </div>
    );
}

export default SendSOLPage;

import classnames from 'classnames';
import styles from './index.module.scss';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import Form from './SwapForm'

function SwapPage() {
    return (
        <div className={classnames(styles['main-page'])}>
            <Header />
            <PageTitle ext={false} sub={false} name={'Swap'}/>
            <Form />
            <Menu />
        </div>
    );
}

export default SwapPage;

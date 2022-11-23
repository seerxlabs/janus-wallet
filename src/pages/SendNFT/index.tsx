import classnames from 'classnames';
import styles from './index.module.scss';
import BackBar from '../../components/BackBar';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';

function SendNFTPage() {
    return (
        <div className={classnames(styles['main-page'])}>
            <BackBar />
            <PageTitle ext={false} sub={false} name={'Send NFT'}/>
            <Menu />
        </div>
    );
}

export default SendNFTPage;

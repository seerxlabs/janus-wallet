import styles from './index.module.scss';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import PageTitle from '@/components/PageTitle';
import Form from './SwapForm'

export default function SwapPage() {
    return (
        <div className={styles['page-main']}>
            <Header />
            <div className={styles['page-content']}>
                <PageTitle ext={false} sub={false} name={'Swap'}/>
                <Form />
            </div>
            <Menu />
        </div>
    );
}


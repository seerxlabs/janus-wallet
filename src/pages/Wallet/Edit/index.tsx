import styles from './index.module.scss';
import PageTitle from "@/components/PageTitle";
import BackBar from "@/components/BackBar";
import Form from "./Form"

export default function WalletEdit() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <PageTitle name={'Edit Wallet'} sub={false}/>
                <Form/>
            </div>
        </div>
    );
}

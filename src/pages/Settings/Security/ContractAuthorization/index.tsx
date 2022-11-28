import styles from './index.module.scss';
import PageTitle from "@/components/PageTitle";
import BackBar from "@/components/BackBar";
import List from "./List"

export default function ContractAuthorization() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <PageTitle name={'Contract authorization'} sub={false}/>
                <List/>
            </div>
        </div>
    );
}


import styles from './index.module.scss';
import PageTitle from "@/components/PageTitle";
import BackBar from "@/components/BackBar";
import Form from "./Form"

export default function AddTokenPage() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <PageTitle name={'Add custom token'} sub={false} ext={false}/>
            <Form/>
        </div>
    );
}

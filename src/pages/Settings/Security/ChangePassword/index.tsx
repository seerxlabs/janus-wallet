import styles from './index.module.scss';
import PageTitle from "@/components/PageTitle";
import BackBar from "@/components/BackBar";
import Form from "./Form"

export default function ChangePassword() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <Form/>
        </div>
    );
}
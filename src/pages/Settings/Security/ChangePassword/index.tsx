import styles from './index.module.scss';
import BackBar from "@/components/BackBar";
import Form from "./Form"

export default function ChangePassword() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <Form/>
            </div>
        </div>
    );
}

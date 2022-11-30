import styles from "./index.module.scss";
import WebTop from "@/components/WebTop";
// import Step1 from "./Step1"
import Step2 from "./Step2"

export default function CreateByEmail() {
    return (
        <div className={styles['page-main']}>
            <WebTop/>
            <div className={styles['page-container']}>
                {/*<Step1/>*/}
                <Step2/>
            </div>
        </div>
    );
}

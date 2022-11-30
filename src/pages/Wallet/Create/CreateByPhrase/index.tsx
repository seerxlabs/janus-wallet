import styles from "./index.module.scss";
import WebTop from "@/components/WebTop";
// import Step1 from "./Step1"
// import Step2 from "./Step2"
import Step3 from "./Step3"

export default function CreateByPhrase() {
    return (
        <div className={styles['page-main']}>
            <WebTop/>
            <div className={styles['page-container']}>
                {/*<Step1/>*/}
                {/*<Step2/>*/}
                <Step3/>
            </div>
        </div>
    );
}

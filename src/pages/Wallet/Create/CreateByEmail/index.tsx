import styles from "./index.module.scss";
import WebTop from "@/components/WebTop";
import Step1 from "./Step1"
import Step2 from "./Step2"
import {useState} from "react";

export default function CreateByEmail() {
    const [walletCreateEmailStep] = useState(1);

    return (
        <div className={styles['page-main']}>
            <WebTop/>
            <div className={styles['page-container']}>
                {walletCreateEmailStep === 1 ?
                    <Step1 />
                    :
                    <Step2/>
                }
            </div>
        </div>
    );
}

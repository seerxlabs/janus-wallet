import styles from "./index.module.scss";
import IconStep1 from "@/assets/icons/step-1-on.svg"
import IconStep2 from "@/assets/icons/step-2.svg"
import WebBack from "@/components/WebBack";
import axios from 'axios'
import {useState} from "react";
export default function Step1() {
    const [email, setEmailValue] = useState('');
    const [code, setCodeValue] = useState('');

    function sendEmailCode () {
        axios.post('https://api-janus-wallet.404root.com/v1/api/email-captcha', {
            email: email
        }).then(response => {
            console.log(response);
        })
    }
    function toNextStep () {
        // this.setState({
        //     walletCreateEmailStep:2
        // });
    }
    return (
        <div className={styles['step-main']}>
            <WebBack/>
            <div className={styles['step-container']}>
                <div className={styles['step-name']}>
                    <p><img src={IconStep1} alt=""/><b>Add Email address</b></p>
                    <i/>
                    <p><img src={IconStep2} alt=""/><b className={styles['gray']}>Set up password</b></p>
                </div>
                <div className={styles['form-box']}>
                    <form>
                        <div className={styles['input-box']}>
                            <input type="email" value={email} onChange={e=>setEmailValue(e.target.value)} placeholder={'Enter email'} />
                        </div>
                        <div className={styles['input-box']}>
                            <input className={styles['short']} type="text" maxLength={10} value={code} onChange={e=>setCodeValue(e.target.value)} placeholder={'Verification code'} />
                            <a onClick={sendEmailCode}>Get the code</a>
                        </div>
                        {
                            // warning todo: need verify email format
                            // ...
                            email.length > 0 && code.length == 10 ?
                            <button type={"button"} className={styles['btn-primary']} onClick={toNextStep}>Continue</button>
                            :
                            <button type={"button"} className={styles['btn-disable']}>Continue</button>
                        }
                    </form>
                    <div className={styles['tips']}>
                        <p>This is a wallet creating method recommended by Janus for new wallet users.</p>
                        <p>When you are familiar with how to operate the wallet, it is recommend that you delete your Email account and use the seed phrase to import the wallet instead.</p>
                        <p>We can not record or save your private key, nor can we access it, rest assured when you use the wallet！</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

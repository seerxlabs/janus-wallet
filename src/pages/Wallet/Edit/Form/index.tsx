import styles from './index.module.scss';
import IconTheme1 from "@/assets/icons/theme-1.svg"
import IconTheme2 from "@/assets/icons/theme-2.svg"
import IconTheme3 from "@/assets/icons/theme-3.svg"
import IconTheme4 from "@/assets/icons/theme-4.svg"

export default function EditForm() {
    return (
        <div className={styles['form-box']}>
            <div className={styles['form-item']}>
                <label>Icon</label>
                <ul>
                    <li className={styles['on']}><img src={IconTheme1} alt=""/><i/></li>
                    <li><img src={IconTheme2} alt=""/><i/></li>
                    <li><img src={IconTheme3} alt=""/><i/></li>
                    <li><img src={IconTheme4} alt=""/><i/></li>
                </ul>
            </div>
            <div className={styles['form-item']}>
                <label>Name</label>
                <div className={styles['input-box']}>
                    <input placeholder='' value={'MyWallet 1'}/>
                </div>
            </div>
            <div className={styles['submit-btn']}>
                <button className={styles['save']}>Save</button>
            </div>
        </div>
    );
}


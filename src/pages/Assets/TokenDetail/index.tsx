import styles from './index.module.scss';
import BackBar from "../../../components/BackBar";
import Dashboard from "./Dashboard";
import Buttons from "./Buttons";
import Log from "./Log";

export default function TokenDetail() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <Dashboard/>
            <Buttons/>
            <Log/>
        </div>
    );
}

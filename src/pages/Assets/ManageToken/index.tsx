import styles from './index.module.scss';
import PageTitle from "@/components/PageTitle";
import BackBar from "@/components/BackBar";
import {Link} from "react-router-dom";
import List from "./List"

export default function ManageTokenPage() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <PageTitle name={'Manage tokens'} sub={false}/>
            <List/>
            <Link to="create" className={styles['add-btn']}>
                <button>Add custom token</button>
            </Link>
        </div>
    );
}

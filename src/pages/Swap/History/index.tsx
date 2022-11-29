import styles from './index.module.scss';
import PageTitle from '@/components/PageTitle';
import BackBar from '@/components/BackBar';
import {Link} from "react-router-dom";

export default function HistoryOrder() {
    return (
        <div className={styles['page-main']}>
            <BackBar/>
            <div className={styles['page-container']}>
                <PageTitle sub={false} name={'History record'}/>
                <ul>
                    <li>
                        <Link to="/swap/order/detail">
                            <label>ETH to EOS</label>
                            <p><b>Pay 0.06</b><span>Completed</span></p>
                            <p><b>Receive 2.260095</b><span>Nov 13 2022, 19:04</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/swap/order/detail">
                            <label>ETH to EOS</label>
                            <p><b>Pay 0.06</b><span>Completed</span></p>
                            <p><b>Receive 2.260095</b><span>Nov 13 2022, 19:04</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/swap/order/detail">
                            <label>ETH to EOS</label>
                            <p><b>Pay 0.06</b><span>Completed</span></p>
                            <p><b>Receive 2.260095</b><span>Nov 13 2022, 19:04</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/swap/order/detail">
                            <label>ETH to EOS</label>
                            <p><b>Pay 0.06</b><span>Completed</span></p>
                            <p><b>Receive 2.260095</b><span>Nov 13 2022, 19:04</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/swap/order/detail">
                            <label>ETH to EOS</label>
                            <p><b>Pay 0.06</b><span>Completed</span></p>
                            <p><b>Receive 2.260095</b><span>Nov 13 2022, 19:04</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/swap/order/detail">
                            <label>ETH to EOS</label>
                            <p><b>Pay 0.06</b><span>Completed</span></p>
                            <p><b>Receive 2.260095</b><span>Nov 13 2022, 19:04</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/swap/order/detail">
                            <label>ETH to EOS</label>
                            <p><b>Pay 0.06</b><span>Completed</span></p>
                            <p><b>Receive 2.260095</b><span>Nov 13 2022, 19:04</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/swap/order/detail">
                            <label>ETH to EOS</label>
                            <p><b>Pay 0.06</b><span>Completed</span></p>
                            <p><b>Receive 2.260095</b><span>Nov 13 2022, 19:04</span></p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}


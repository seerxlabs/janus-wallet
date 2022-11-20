import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function Buttons() {
  return (
    <div>
        <div>
            <Link to="send"><button>发送</button></Link>
            <Link to="receive"><button>接收</button></Link>
            <Link to="exchange"><button>兑换</button></Link>
        </div>
        <Link to="backup"><button>备份助记词</button></Link>
    </div>
  );
}

export default Buttons;

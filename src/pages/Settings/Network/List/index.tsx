import styles from './index.module.scss';
import iconUSDC from '@/assets/icons/net-usdc.svg'
import iconETH from '@/assets/icons/net-eth.svg'


interface NetworkProps {
    id: string
    name: string
    icon: string
}

const NetworkItem = (props: NetworkProps) => {
    return (
        <li className={styles['list-item-on']}>
            <img src={props.icon} alt=""/><p>{props.name}</p><i/>
        </li>
    )
}


export default function NetworkList() {
    const network = [
        {name: "Ethereum", icon: iconETH, id: "1"},
        {name: "Solana", icon: iconUSDC, id: "2"},
    ]
    return (
        <ul className={styles['list-main']}>
            <NetworkItem name={network[0].name} icon={network[0].icon}  id={network[0].id}/>
        </ul>
    );
}


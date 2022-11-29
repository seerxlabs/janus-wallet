import styles from './index.module.scss';
import iconUSDC from '@/assets/icons/net-usdc.svg'
import iconETH from '@/assets/icons/net-eth.svg'


interface NetworkProps {
    id: string
    name: string
    icon: string
}

let useNetwork = "1"

const NetworkItem = (props: NetworkProps) => {
    return (
        <li
            onClick={()=>{ useNetwork = props.id; console.log(useNetwork);  }}
            className={props.id === useNetwork ? styles['list-item-on']:''}
        >
            <img src={props.icon} alt=""/>
            <p>{props.name}</p>
            { useNetwork === props.id ? <i/>: null }
        </li>
    )
}


function NetworkList() {
    const network = [
        {name: "Ethereum", icon: iconETH, id: "1"},
        {name: "Solana", icon: iconUSDC, id: "2"},
    ]
    return (
        <ul className={styles['list-main']}>
            {network.map((item , i) => {
                return <NetworkItem key={i} name={item.name} icon={item.icon}  id={item.id} />
            })}
        </ul>
    );
}

export default NetworkList


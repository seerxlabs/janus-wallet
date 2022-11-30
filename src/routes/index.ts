import { RouteConfig } from 'react-router-config'

import Login from "@/pages/Login";
import Welcome from "@/pages/Welcome";
import CreateWallet from "@/pages/Wallet/Create";
import CreateByEmail from "@/pages/Wallet/Create/CreateByEmail";
import CreateByPhrase from "@/pages/Wallet/Create/CreateByPhrase";
import ImportWallet from "@/pages/Wallet/Import";
import ImportByEmail from "@/pages/Wallet/Import/ImportByEmail";
import ImportByPhrase from "@/pages/Wallet/Import/ImportByPhrase";
import Unlock from "@/pages/Settings/Security/Unlock";
import Verify from "@/pages/Settings/Security/Verify";
import Assets from "@/pages/Assets";
import ManageToken from "@/pages/Assets/ManageToken";
import AddToken from "@/pages/Assets/AddToken";
import TokenDetail from "@/pages/Assets/TokenDetail";
import SendSOL from "@/pages/Assets/SendSOL";
import SendSOLConfirm from "@/pages/Assets/SendSOL/Confirm";
import SendSOLSuccess from "@/pages/Assets/SendSOL/Success";
import Swap from "@/pages/Swap";
import SwapSuccess from "@/pages/Swap/Success";
import Network from "@/pages/Settings/General/Network";
import Wallet from "@/pages/Wallet";
import NFT from "@/pages/NFT";
import NFTDetail from "@/pages/NFT/Detail";
import NFTEmpty from "@/pages/NFT/Empty";
import NFTSend from "@/pages/NFT/Send";
import NFTSendSuccess from "@/pages/NFT/Send/Success";
import Dapp from "@/pages/Dapp";
import Settings from "@/pages/Settings";
import ResetWallet from "@/pages/Settings/Security/ResetWallet";
import DeleteEmailAccount from "@/pages/Settings/Security/ResetWallet";
import ResetWalletSuccess from "@/pages/Settings/Security/ResetWallet/Success";
import ContractAuthorization from "@/pages/Settings/Security/ContractAuthorization";
import ChangePassword from "@/pages/Settings/Security/ChangePassword";
import CheckOrder from "@/pages/Swap/Check";
import HistoryOrder from "@/pages/Swap/History";
import OrderDetail from "@/pages/Swap/History/Detail";

const routes: RouteConfig[] = [
    {path: '/', exact: true, component: Assets},
    {path: '/assets', exact: true, component: Assets},
    {path: '/assets/manageToken', exact: true, component: ManageToken},
    {path: '/assets/addToken', exact: true, component: AddToken},
    {path: '/assets/tokenDetail', exact: true, component: TokenDetail},
    {path: '/assets/sendSOL', exact: true, component: SendSOL},
    {path: '/assets/sendSOL/confirm', exact: true, component: SendSOLConfirm},
    {path: '/assets/sendSOL/success', exact: true, component: SendSOLSuccess},
    {path: '/swap', exact: true, component: Swap},
    {path: '/swap/check', exact: true, component: CheckOrder},
    {path: '/swap/order', exact: true, component: HistoryOrder},
    {path: '/swap/order/detail', exact: true, component: OrderDetail},
    {path: '/swap/success', exact: true, component: SwapSuccess},
    {path: '/login', exact: true, component: Login},
    {path: '/welcome', exact: true, component: Welcome},
    {path: '/wallet', exact: true, component: Wallet},
    {path: '/wallet/create', exact: true, component: CreateWallet},
    {path: '/wallet/create/email', exact: true, component: CreateByEmail},
    {path: '/wallet/create/phrase', exact: true, component: CreateByPhrase},
    {path: '/wallet/import', exact: true, component: ImportWallet},
    {path: '/wallet/import/email', exact: true, component: ImportByEmail},
    {path: '/wallet/import/phrase', exact: true, component: ImportByPhrase},
    {path: '/nft', exact: true, component: NFT},
    {path: '/nft/detail', exact: true, component: NFTDetail},
    {path: '/nft/empty', exact: true, component: NFTEmpty},
    {path: '/nft/send', exact: true, component: NFTSend},
    {path: '/nft/send/success', exact: true, component: NFTSendSuccess},
    {path: '/dapp', exact: true, component: Dapp},
    {path: '/settings', exact: true, component: Settings},
    {path: '/settings/unlock', exact: true, component: Unlock},
    {path: '/settings/network', exact: true, component: Network},
    {path: '/settings/verify', exact: true, component: Verify},
    {path: '/settings/resetWallet', exact: true, component: ResetWallet},
    {path: '/settings/resetWallet/success', exact: true, component: ResetWalletSuccess},
    {path: '/settings/deleteEmailAccount', exact: true, component: DeleteEmailAccount},
    {path: '/settings/contractAuthorization', exact: true, component: ContractAuthorization},
    {path: '/settings/changePassword', exact: true, component: ChangePassword},
]
export default routes

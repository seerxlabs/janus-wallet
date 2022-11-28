import { RouteConfig } from 'react-router-config'

import LoginPage from "@/pages/Login";
import MyWalletPage from "@/pages/Wallet";
import UnlockPage from "@/pages/Settings/Security/Unlock";
import VerifyPage from "@/pages/Verify";
import AssetsPage from "@/pages/Assets";
import ManageTokenPage from "@/pages/Assets/ManageToken";
import AddTokenPage from "@/pages/Assets/AddToken";
import TokenDetailPage from "@/pages/Assets/TokenDetail";
import SendSOLPage from "@/pages/Assets/SendSOL";
import SendSOLSuccessPage from "@/pages/Assets/SendSOL/Success";
import SwapPage from "@/pages/Swap";
import SwapSuccessPage from "@/pages/Swap/Success";
import NetworkPage from "@/pages/Settings/Network";
import WalletPage from "@/pages/Wallet";
import NFTPage from "@/pages/NFT";
import NFTDetailPage from "@/pages/NFT/Detail";
import NFTEmptyPage from "@/pages/NFT/Empty";
import NFTSendPage from "@/pages/NFT/Send";
import NFTSendSuccessPage from "@/pages/NFT/Send/Success";
import DappPage from "@/pages/Dapp";
import SettingsPage from "@/pages/Settings";
import ResetWalletPage from "@/pages/Settings/Security/ResetWallet";
import ResetWalletSuccessPage from "@/pages/Settings/Security/ResetWallet/Success";
import ContractAuthorizationPage from "@/pages/Settings/Security/ContractAuthorization";
import ChangePasswordPage from "@/pages/Settings/Security/ChangePassword";

const routes: RouteConfig[] = [
    {path: '/', exact: true, component: AssetsPage},
    {path: '/assets', exact: true, component: AssetsPage},
    {path: '/wallet', exact: true, component: MyWalletPage},
    {path: '/assets/manageToken', exact: true, component: ManageTokenPage},
    {path: '/assets/addToken', exact: true, component: AddTokenPage},
    {path: '/assets/tokenDetail', exact: true, component: TokenDetailPage},
    {path: '/assets/sendSOL', exact: true, component: SendSOLPage},
    {path: '/assets/sendSOL/success', exact: true, component: SendSOLSuccessPage},
    {path: '/swap', exact: true, component: SwapPage},
    {path: '/swap/success', exact: true, component: SwapSuccessPage},
    {path: '/login', exact: true, component: LoginPage},
    {path: '/verify', exact: true, component: VerifyPage},
    {path: '/wallet', exact: true, component: WalletPage},
    {path: '/nft', exact: true, component: NFTPage},
    {path: '/nft/detail', exact: true, component: NFTDetailPage},
    {path: '/nft/empty', exact: true, component: NFTEmptyPage},
    {path: '/nft/send', exact: true, component: NFTSendPage},
    {path: '/nft/send/success', exact: true, component: NFTSendSuccessPage},
    {path: '/dapp', exact: true, component: DappPage},
    {path: '/settings', exact: true, component: SettingsPage},
    {path: '/settings/unlock', exact: true, component: UnlockPage},
    {path: '/settings/network', exact: true, component: NetworkPage},
    {path: '/settings/resetWallet', exact: true, component: ResetWalletPage},
    {path: '/settings/resetWallet/success', exact: true, component: ResetWalletSuccessPage},
    {path: '/settings/contractAuthorization', exact: true, component: ContractAuthorizationPage},
    {path: '/settings/changePassword', exact: true, component: ChangePasswordPage},
]
export default routes

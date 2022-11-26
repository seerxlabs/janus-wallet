import { RouteConfig } from 'react-router-config'

import LoginPage from "@/pages/Login";
import UnlockPage from "@/pages/Unlock";
import VerifyPage from "@/pages/Verify";
import AssetsPage from "@/pages/Assets";
import BackupPage from "@/pages/Assets/Backup";
import SendSOLPage from "@/pages/Assets/SendSOL";
import SendSOLSuccessPage from "@/pages/Assets/SendSOL/Success";
import SendNFTPage from "@/pages/Assets/SendNFT";
import SendNFTSuccessPage from "@/pages/Assets/SendNFT/Success";
import SwapPage from "@/pages/Swap";
import SwapSuccessPage from "@/pages/Swap/Success";
import NetworkPage from "@/pages/Network";
import WalletPage from "@/pages/Wallet";
import NFTPage from "@/pages/NFT";
import NFTDetailPage from "@/pages/NFT/Detail";
import DappPage from "@/pages/Dapp";
import SettingsPage from "@/pages/Settings";
import ResetWalletPage from "@/pages/Settings/Security/ResetWallet";
import ResetWalletSuccessPage from "@/pages/Settings/Security/ResetWallet/Success";
import ContractAuthorizationPage from "@/pages/Settings/Security/ContractAuthorization";

const routes: RouteConfig[] = [
    {path: '/', exact: true, component: AssetsPage},
    {path: '/assets', exact: true, component: AssetsPage},
    {path: '/assets/backup', exact: true, component: BackupPage},
    {path: '/assets/sendSOL', exact: true, component: SendSOLPage},
    {path: '/assets/sendSOL/success', exact: true, component: SendSOLSuccessPage},
    {path: '/assets/sendNFT', exact: true, component: SendNFTPage},
    {path: '/assets/sendNFT/success', exact: true, component: SendNFTSuccessPage},
    {path: '/swap', exact: true, component: SwapPage},
    {path: '/swap/success', exact: true, component: SwapSuccessPage},
    {path: '/login', exact: true, component: LoginPage},
    {path: '/unlock', exact: true, component: UnlockPage},
    {path: '/verify', exact: true, component: VerifyPage},
    {path: '/network', exact: true, component: NetworkPage},
    {path: '/wallet', exact: true, component: WalletPage},
    {path: '/nft', exact: true, component: NFTPage},
    {path: '/nft/detail', exact: true, component: NFTDetailPage},
    {path: '/dapp', exact: true, component: DappPage},
    {path: '/settings', exact: true, component: SettingsPage},
    {path: '/settings/resetWallet', exact: true, component: ResetWalletPage},
    {path: '/settings/resetWallet/success', exact: true, component: ResetWalletSuccessPage},
    {path: '/settings/ContractAuthorization', exact: true, component: ContractAuthorizationPage},
]
export default routes

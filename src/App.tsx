import LoginPage from "./pages/Login";
import UnlockPage from "./pages/Unlock";
import AssetsPage from "./pages/Assets";
import BackupPage from "./pages/Backup";
import SendSOLPage from "./pages/SendSOL";
import SendSOLSuccessPage from "./pages/SendSOL/Success";
import SendNFTPage from "./pages/SendNFT";
import SendNFTSuccessPage from "./pages/SendNFT/Success";
import SwapPage from "./pages/Swap";
import SwapSuccessPage from "./pages/Swap/Success";
import WalletPage from "./pages/Wallet";
import NFTPage from "./pages/NFT";
import NFTDetailPage from "./pages/NFT/Detail";
import DappPage from "./pages/Dapp";
import SettingsPage from "./pages/Settings";
import ResetWalletPage from "./pages/Settings/Security/ResetWallet";
import ResetWalletSuccessPage from "./pages/Settings/Security/ResetWallet/Success";
import ContractAuthorizationPage from "./pages/Settings/Security/ContractAuthorization";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path='/' element={<AssetsPage />} />
        <Route path='assets' element={<AssetsPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='unlock' element={<UnlockPage />} />
        <Route path='backup' element={<BackupPage />} />
        <Route path='sendSOL' element={<SendSOLPage />} />
        <Route path='sendSOL/success' element={<SendSOLSuccessPage />} />
        <Route path='sendNFT' element={<SendNFTPage />} />
        <Route path='sendNFT/success' element={<SendNFTSuccessPage />} />
        <Route path='swap' element={<SwapPage />} />
        <Route path='swap/success' element={<SwapSuccessPage />} />
        <Route path='wallet' element={<WalletPage />} />
        <Route path='nft' element={<NFTPage />} />
        <Route path='nft/detail' element={<NFTDetailPage />} />
        <Route path='dapp' element={<DappPage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='settings/resetWallet' element={<ResetWalletPage />} />
        <Route path='settings/resetWallet/success' element={<ResetWalletSuccessPage />} />
        <Route path='settings/ContractAuthorization' element={<ContractAuthorizationPage />} />
      </Routes>
  );
}

export default App;

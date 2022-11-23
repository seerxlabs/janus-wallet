import LoginPage from "./pages/Login";
import AssetsPage from "./pages/Assets";
import BackupPage from "./pages/Backup";
import SendSOLPage from "./pages/SendSOL";
import SendNFTPage from "./pages/SendNFT";
import SwapPage from "./pages/Swap";
import NFTPage from "./pages/NFT";
import NFTDetailPage from "./pages/NFT/Detail";
import DappPage from "./pages/Dapp";
import SettingsPage from "./pages/Settings";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path='/' element={<AssetsPage />} />
        <Route path='assets' element={<AssetsPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='backup' element={<BackupPage />} />
        <Route path='sendSOL' element={<SendSOLPage />} />
        <Route path='sendNFT' element={<SendNFTPage />} />
        <Route path='swap' element={<SwapPage />} />
        <Route path='nft' element={<NFTPage />} />
        <Route path='nft/detail' element={<NFTDetailPage />} />
        <Route path='dapp' element={<DappPage />} />
        <Route path='settings' element={<SettingsPage />} />
      </Routes>
  );
}

export default App;

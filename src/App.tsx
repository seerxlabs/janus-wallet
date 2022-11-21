import LoginPage from "./pages/Login";
import AssetsPage from "./pages/Assets";
import BackupPage from "./pages/Backup";
import SendPage from "./pages/Send";
import ReceivePage from "./pages/Receive";
import SwapPage from "./pages/Swap";
import NFTPage from "./pages/NFT";
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
        <Route path='send' element={<SendPage />} />
        <Route path='receive' element={<ReceivePage />} />
        <Route path='swap' element={<SwapPage />} />
        <Route path='nft' element={<NFTPage />} />
        <Route path='dapp' element={<DappPage />} />
        <Route path='settings' element={<SettingsPage />} />
      </Routes>
  );
}

export default App;

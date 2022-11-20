import LoginPage from "./pages/Login";
import AssetsPage from "./pages/Assets";
import BackupPage from "./pages/Backup";
import SendPage from "./pages/Send";
import ReceivePage from "./pages/Receive";
import ExchangePage from "./pages/Exchange";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path='/' element={<AssetsPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='backup' element={<BackupPage />} />
        <Route path='send' element={<SendPage />} />
        <Route path='receive' element={<ReceivePage />} />
        <Route path='exchange' element={<ExchangePage />} />
      </Routes>
  );
}

export default App;

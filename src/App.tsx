import {renderRoutes} from 'react-router-config'
import {ToastContainer} from 'react-toastify';
import "@/assets/css/ReactToastify.css"
import routes from '@/routes'
import '@/App.css';

function App() {
    return (
        <div className="app" id="app">
            {renderRoutes(routes)}
            <ToastContainer/>
        </div>
    );
}

export default App;

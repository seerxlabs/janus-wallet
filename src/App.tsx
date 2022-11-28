import {renderRoutes} from 'react-router-config'
import routes from './routes'
import './App.css';

function App() {
    return (
        <div className="app">
          {renderRoutes(routes)}
        </div>
    );
}

export default App;

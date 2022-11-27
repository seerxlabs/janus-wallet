import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@/routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
    </React.StrictMode>
)

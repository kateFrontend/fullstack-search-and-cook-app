import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
import { AppProvider } from './context'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-9bjgh1ec.us.auth0.com"
            clientId="YqOdbZS47NUojP2fKf9EeXucq43SaINM"
            redirectUri={window.location.origin}
        >
            <AppProvider>
                <App />
            </AppProvider>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

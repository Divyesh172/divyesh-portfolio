import React from 'react'
import ReactDOM from 'react-dom/client'
import { injectSpeedInsights } from '@vercel/speed-insights'
import App from './App.jsx'
import './index.css'
import { SpeedInsights } from "@vercel/speed-insights/react" // <-- IMPORT THIS

injectSpeedInsights()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <SpeedInsights />  {/* <-- ADD THIS COMPONENT */}
    </React.StrictMode>,
)
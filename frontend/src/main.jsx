import React from 'react'

import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'
import {createRoot} from "react-dom/client"

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}
createRoot(rootElement).render(
  <BrowserRouter>
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <App />
    </ClerkProvider>
  </React.StrictMode>
  </BrowserRouter>
  
)
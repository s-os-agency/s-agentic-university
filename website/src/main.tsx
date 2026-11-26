import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import './lib/logger'
import App from './App.tsx'
import { TRPCProvider } from '@/providers/trpc'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <TRPCProvider>
      <App />
    </TRPCProvider>
  </HashRouter>,
)

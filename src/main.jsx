import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Clases from './pages/Clases'
import Certificado from './pages/Certificado'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/certificado" element={<Certificado />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

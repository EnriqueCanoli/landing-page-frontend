import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import FormPage from './pages/FormPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/formulario" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

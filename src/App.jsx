import Home from './pages/Home.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import Auth from './pages/Auth.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-service' element={<TermsOfService />} />
            <Route path='/auth' element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs';
import MakesDifferents from './pages/MakesDifferent';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        {/* <Header /> */}
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <HomePage />
              }
            />
            <Route
              path='/about-us'
              element={
                <AboutUs />
              }
            />
            <Route
              path='/makes-different'
              element={
                <MakesDifferents />
              }
            />
            <Route
              path='/contact-us'
              element={
                <ContactUs />
              }
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;

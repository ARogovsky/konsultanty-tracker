import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent';

import {
  Home,
  About,
  Service,
  Team,
  Faq,
  Contact,
  Privacy,
  CookiePolicy,
  ProBono,
  ThankYou,
  NotFound
} from './pages'

function App() {
  useEffect(() => {
    document.title = 'ГО КОНСУЛЬТАНТИ';
  }, []);

  const handleAccept = () => {
    // Set cookie to remember user's choice
    document.cookie = "gok-cookie-consent=true; max-age=31536000; path=/";
    console.log("Cookies accepted");
  };

  const handleDecline = () => {
    // Set cookie to remember user's declined choice
    document.cookie = "gok-cookie-consent=false; max-age=31536000; path=/";
    console.log("Cookies declined");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='team' element={<Team />} />
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='cookie-policy' element={<CookiePolicy />} />
        <Route path='pro-bono' element={<ProBono />} />
        <Route path='thank-you' element={<ThankYou />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <CookieConsent
        location="bottom"
        buttonText="Я приймаю"
        declineButtonText="Відмовитись"
        cookieName="gok-cookie-consent"
        style={{
          background: "#200632",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "1rem",
        }}
        contentStyle={{
          flex: "1",
          margin: "0",
        }}
        buttonStyle={{
          background: "#F83282",
          color: "#fff",
          fontSize: "14px",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
        }}
        declineButtonStyle={{
          background: "transparent", 
          border: "1px solid white",
          color: "#fff",
          fontSize: "14px",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
        }}
        enableDeclineButton
        flipButtons
        buttonWrapperClasses="flex space-x-2 mt-4 md:mt-0"
        containerClasses="flex justify-between items-center flex-col md:flex-row"
        onAccept={handleAccept}
        onDecline={handleDecline}
      >
        Цей веб-сайт використовує файли cookie для покращення вашого досвіду. Детальніше в нашій{" "}
        <Link to="/cookie-policy" className="text-mipt-pink underline">
          Політиці використання cookies
        </Link>.
      </CookieConsent>
    </BrowserRouter>
  );
}

export default App;

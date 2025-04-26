import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  Home,
  About,
  Program,
  Team,
  Faq,
  Contact,
  Privacy,
  Terms,
  ProBono,
  ThankYou,
  NotFound
} from './pages'

function App() {
  useEffect(() => {
    document.title = 'ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='program' element={<Program />} />
        <Route path='team' element={<Team />} />
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='terms' element={<Terms />} />
        <Route path='pro-bono' element={<ProBono />} />
        <Route path='thank-you' element={<ThankYou />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

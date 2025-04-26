import { useEffect } from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import SalaryInfo from '../components/SalaryInfo';
import OutcomesSection from '../components/OutcomesSection';
import Footer from '../components/Footer';

function App() {
  useEffect(() => {
    document.title = 'ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-mipt-light">
      <Header />
      <main>
        <Hero />
        <SalaryInfo />
        <OutcomesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
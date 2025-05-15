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
    <div className="bg-mipt-light">
      <Header />
      <main>
        <Hero />
        <SalaryInfo />
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <img
              src="/assets/images/mon.jpg"
              alt="Official launch of the network of startup schools, incubators, accelerators"
              className="max-w-full h-auto rounded-xl shadow-lg mb-6"
              style={{ maxWidth: '600px' }}
            />
          </div>
        </section>
        <OutcomesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
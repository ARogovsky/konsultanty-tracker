import { useEffect } from 'react';

import Header from '../components/Header';
import ServiceDetails from '../components/ServiceDetails';
import Footer from '../components/Footer';

function Service() {
  useEffect(() => {
    document.title = 'Послуги | ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="bg-mipt-light">
      <Header />
      <main>
        <ServiceDetails />
      </main>
      <Footer />
    </div>
  );
}

export default Service;

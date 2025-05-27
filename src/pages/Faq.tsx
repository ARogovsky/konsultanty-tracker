import { useEffect } from 'react';

import Header from '../components/Header';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

function Faq() {
  useEffect(() => {
    document.title = 'ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="bg-mipt-light">
      <Header />
      <main>
        <FaqSection />
        <div data-tf-live="01JVPK84FQBQCYT6QEF38HBJF6"></div>
      </main>
      <Footer />
    </div>
  );
}

export default Faq;

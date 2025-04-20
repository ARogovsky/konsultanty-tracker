import { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Terms() {
  useEffect(() => {
    document.title = 'ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-mipt-light">
      <Header />
      <main>
        <div>Terms of Use</div>
      </main>
      <Footer />
    </div>
  );
}

export default Terms;

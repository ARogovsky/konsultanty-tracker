import { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
  useEffect(() => {
    document.title = 'ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-mipt-light">
      <Header />
      <main>
        <div>404 - Page NotFound</div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;

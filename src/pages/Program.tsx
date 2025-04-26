import { useEffect } from 'react';

import Header from '../components/Header';
import ProgramDetails from '../components/ProgramDetails';
import Footer from '../components/Footer';

function Program() {
  useEffect(() => {
    document.title = 'ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-mipt-light">
      <Header />
      <main>
        <ProgramDetails />
      </main>
      <Footer />
    </div>
  );
}

export default Program;

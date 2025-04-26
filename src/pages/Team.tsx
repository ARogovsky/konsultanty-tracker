import { useEffect } from 'react';

import Header from '../components/Header';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

function Team() {
  useEffect(() => {
    document.title = 'Команда | ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="bg-mipt-light">
      <Header />
      <main>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

export default Team;

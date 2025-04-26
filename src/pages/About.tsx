import { useEffect } from 'react';

import Header from '../components/Header';
import AboutCourse from '../components/AboutCourse';
import Footer from '../components/Footer';

function About() {
  useEffect(() => {
    document.title = 'ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="bg-mipt-light">
      <Header />
      <main>
        <AboutCourse />
      </main>
      <Footer />
    </div>
  );
}

export default About;

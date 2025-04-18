import { useEffect } from 'react';

// Page sections
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCourse from './components/AboutCourse';
import SalaryInfo from './components/SalaryInfo';
import ProgramDetails from './components/ProgramDetails';
import TeamSection from './components/TeamSection';
import OutcomesSection from './components/OutcomesSection';
import ContactForm from './components/ContactForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set the document title
    document.title = 'ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-mipt-light">
      <Header />
      <main>
        <Hero />
        <AboutCourse />
        <SalaryInfo />
        <ProgramDetails />
        <TeamSection />
        <OutcomesSection />
        <ContactForm />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { useEffect } from 'react';

import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Contact() {
  useEffect(() => {
    document.title = 'ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="bg-mipt-light">
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;

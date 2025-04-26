import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  useEffect(() => {
    document.title = 'Дякуємо за заявку | ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="bg-mipt-purple-dark text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
          <div className="mb-6 flex justify-center">
            <div className="bg-mipt-pink">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h1 className="mb-4 text-4xl font-bold">Дякуємо за вашу заявку!</h1>
          
          <p className="mb-8 text-xl">
            Ми отримали вашу заявку на участь у програмі підготовки менторів 
            для студентських стартапів. Наш координатор зв'яжеться з вами найближчим часом.
          </p>
          
          <div className="mb-8 rounded-xl bg-white/5 p-6">
            <h2 className="mb-4 text-2xl font-semibold">Що далі?</h2>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-mipt-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Очікуйте на лист з підтвердженням на вашу електронну пошту</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-mipt-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Наш координатор зв'яжеться з вами для уточнення деталей</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-mipt-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ми повідомимо про початок навчання та надішлемо деталі програми</span>
              </li>
            </ul>
          </div>
          
          <p className="mb-10 text-white/80">
            Якщо у вас виникли питання, ви можете написати нам на 
            <a href="mailto:admin@konsultanty.com.ua" className="bg-mipt-pink hover:underline">
              admin@konsultanty.com.ua
            </a>
            {/* або зателефонувати за номером 
            <a href="tel:+380441234567" className="bg-mipt-pink hover:underline">
              +38 (044) 123-45-67
            </a> */}
          </p>
          
          <Link 
            to="/" 
            className="bg-mipt-pink px-8 py-3 font-medium text-white transition hover:bg-opacity-90"
          >
            Повернутися на головну
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
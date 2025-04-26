import type React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProBono: React.FC = () => {
  useEffect(() => {
    // Set the document title
    document.title = 'Pro Bono | ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-mipt-light">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-mipt-purple-dark py-16 text-white md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="mb-6 text-center text-4xl font-bold md:text-5xl">
              Pro Bono
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-center text-lg md:text-xl">
              Безкоштовна підготовка менторів для ВНЗ України
            </p>
          </div>
          
          {/* Abstract decorative elements */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-mipt-pink opacity-20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-mipt-purple-light opacity-20 blur-3xl" />
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
                Наша місія
              </h2>
              <p className="mb-10 text-lg text-gray-700">
                ГО КОНСУЛЬТАНТИ — це некомерційна організація, яка працює на розвиток інноваційної екосистеми України. Одним із ключових напрямків нашої діяльності є безкоштовна підготовка співробітників вищих навчальних закладів у якості менторів для студентських стартапів.
              </p>

              <div className="mb-16 rounded-xl bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-bold text-mipt-purple">Чому це важливо?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-mipt-pink p-2 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-mipt-purple-dark">Розвиток інноваційного потенціалу</h4>
                      <p className="mt-1 text-gray-600">
                        Студенти мають багато ідей, але часто їм не вистачає досвіду та наставництва для перетворення цих ідей у реальні проєкти.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-mipt-pink p-2 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-mipt-purple-dark">Співпраця науки та бізнесу</h4>
                      <p className="mt-1 text-gray-600">
                        Викладачі та наукові співробітники університетів мають глибокі знання, які можуть допомогти студентам розвивати інноваційні проєкти з практичною цінністю.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-mipt-pink p-2 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-mipt-purple-dark">Підвищення якості освіти</h4>
                      <p className="mt-1 text-gray-600">
                        Впровадження менторських програм в університетах дозволяє студентам отримувати практичний досвід та розвивати підприємницькі навички.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="mb-8 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
                Наша Pro Bono програма
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                Ми пропонуємо безкоштовне навчання для співробітників українських ВНЗ, які хочуть стати менторами для студентських стартап-проєктів. Програма включає всі необхідні інструменти та методики для ефективної роботи зі студентськими командами.
              </p>

              <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-xl bg-mipt-purple p-8 text-white shadow-lg">
                  <h3 className="mb-4 text-xl font-bold">Для кого?</h3>
                  <ul className="list-inside list-disc space-y-2">
                    <li>Викладачів університетів</li>
                    <li>Наукових співробітників</li>
                    <li>Керівників студентських лабораторій</li>
                    <li>Співробітників інноваційних центрів ВНЗ</li>
                    <li>Координаторів студентських програм</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-mipt-pink p-8 text-white shadow-lg">
                  <h3 className="mb-4 text-xl font-bold">Що включає програма?</h3>
                  <ul className="list-inside list-disc space-y-2">
                    <li>Онлайн-навчання основам менторингу</li>
                    <li>Практичні семінари та воркшопи</li>
                    <li>Інструменти для роботи зі студентськими командами</li>
                    <li>Методики відбору та розвитку проєктів</li>
                    <li>Підтримку від досвідчених менторів</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl bg-mipt-purple-dark p-8 text-center text-white">
                <h3 className="mb-4 text-2xl font-bold">Як приєднатися?</h3>
                <p className="mb-6">
                  Якщо ви працюєте в українському університеті та зацікавлені у програмі, 
                  зв'яжіться з нами для отримання детальної інформації.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block rounded-lg bg-mipt-pink px-8 py-3 font-medium text-white hover:bg-opacity-90"
                >
                  Подати заявку
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProBono; 
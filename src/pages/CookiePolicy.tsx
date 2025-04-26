import { useEffect, useState } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';

import Header from '../components/Header';
import Footer from '../components/Footer';

function CookiePolicy() {
  const [showCookieDemo, setShowCookieDemo] = useState(false);

  useEffect(() => {
    document.title = 'Політика використання cookies | ГО КОНСУЛЬТАНТИ';
  }, []);

  // Функция для обработки принятия cookies
  const handleAccept = () => {
    setShowCookieDemo(false);
    // Optionally set a cookie to remember the choice
    document.cookie = "cookie-demo-accepted=true; max-age=31536000; path=/";
  };

  // Функция для обработки отказа от cookies
  const handleDecline = () => {
    setShowCookieDemo(false);
    // Optionally set a cookie to remember the choice
    document.cookie = "cookie-demo-accepted=false; max-age=31536000; path=/";
  };

  // Сброс cookies для демонстрации
  const resetCookieConsent = () => {
    setShowCookieDemo(true);
  };

  return (
    <div className="bg-mipt-light">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-mipt-purple-dark md:text-4xl mb-8">
              Політика використання файлів cookie
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-mipt-purple-dark">
                  Що таке файли cookie?
                </h2>
                <p>
                  Файли cookie — це невеликі текстові файли, які розміщуються на вашому комп'ютері або мобільному пристрої 
                  веб-сайтами, які ви відвідуєте. Вони широко використовуються для забезпечення ефективної роботи веб-сайтів 
                  та надання певної інформації власникам сайту.
                </p>
              </section>
              
              <section>
                <h2 className="text-mipt-purple-dark">
                  Які типи файлів cookie ми використовуємо?
                </h2>
                <div className="space-y-4">
                  <h3 className="text-mipt-purple">Необхідні файли cookie</h3>
                  <p>
                    Ці файли cookie необхідні для функціонування нашого веб-сайту. Вони дозволяють вам переміщатися по сайту 
                    та використовувати його функції. Без цих файлів cookie веб-сайт не буде працювати належним чином.
                  </p>
                  
                  <h3 className="text-mipt-purple">Аналітичні файли cookie</h3>
                  <p>
                    Ці файли cookie дозволяють нам аналізувати, як відвідувачі використовують наш веб-сайт, щоб ми могли 
                    вимірювати та покращувати його продуктивність. Вони допомагають нам знати, які сторінки найбільш і найменш 
                    популярні, і бачити, як відвідувачі переміщаються по сайту.
                  </p>
                  
                  <h3 className="text-mipt-purple">Функціональні файли cookie</h3>
                  <p>
                    Ці файли cookie дозволяють веб-сайту запам'ятовувати ваші вибори (наприклад, мову або регіон), щоб 
                    забезпечити покращену та персоналізовану функціональність.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-mipt-purple-dark">
                  Як керувати файлами cookie?
                </h2>
                <p>
                  Більшість веб-браузерів дозволяють певний контроль над більшістю файлів cookie через налаштування 
                  браузера. Щоб дізнатися більше про файли cookie, включаючи те, як переглянути, якими файлами cookie ви 
                  володієте, та як керувати та видаляти їх, відвідайте <a href="https://www.aboutcookies.org" className="text-mipt-pink hover:underline" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> або 
                  <a href="https://www.allaboutcookies.org" className="text-mipt-pink hover:underline" target="_blank" rel="noopener noreferrer"> www.allaboutcookies.org</a>.
                </p>
                <p>
                  Ви можете відмовитись від використання файлів cookie на нашому веб-сайті в будь-який час, активувавши 
                  налаштування у своєму браузері, які дозволяють відмовитися від встановлення всіх або деяких файлів cookie. 
                  Однак, якщо ви використовуєте налаштування браузера для блокування всіх файлів cookie (включаючи необхідні файли cookie), 
                  ви можете не мати доступу до всіх або частин нашого веб-сайту.
                </p>
              </section>
              
              <section>
                <h2 className="text-mipt-purple-dark">
                  Тривалість зберігання файлів cookie
                </h2>
                <p>
                  Файли cookie, які ми використовуємо на нашому веб-сайті, зберігаються протягом різних періодів часу. 
                  Деякі файли cookie є "сеансовими файлами cookie", які видаляються автоматично, коли ви закриваєте браузер. 
                  Інші є "постійними файлами cookie", які залишаються на вашому пристрої протягом встановленого періоду.
                </p>
                <p>
                  Ми зберігаємо файли cookie не довше, ніж це необхідно для цілей, для яких вони були зібрані. 
                  Максимальний термін зберігання файлів cookie, які ми встановлюємо - 1 рік.
                </p>
              </section>
              
              <section>
                <h2 className="text-mipt-purple-dark">
                  Зміни в політиці файлів cookie
                </h2>
                <p>
                  Ми можемо оновлювати нашу політику файлів cookie час від часу, щоб відображати зміни в технологіях або 
                  нормативних вимогах. Будь-які зміни, які ми можемо внести в нашу політику файлів cookie в майбутньому, 
                  будуть опубліковані на цій сторінці.
                </p>
              </section>
              
              <section>
                <h2 className="text-mipt-purple-dark">
                  Контактна інформація
                </h2>
                <p>
                  Якщо у вас виникли запитання про нашу політику файлів cookie, будь ласка, зв'яжіться з нами:
                </p>
                <div className="pl-6 mt-4">
                  <p>ГО "КОНСУЛЬТАНТИ"</p>
                  <p>ЄДРПОУ: 44656954</p>
                  <p>Адреса: 65007, Україна, Одеська обл., місто Одеса, вулиця Старопортофранківська, будинок, 107, квартира, 21</p>
                  <p>Електронна пошта: admin@konsultanty.com.ua</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-mipt-purple-dark">
                  Як зв'язатися з нами
                </h2>
                <p>
                  Якщо у вас є запитання про нашу політику використання cookie, будь ласка, зв'яжіться з нами:
                </p>
                <ul>
                  <li>Електронна пошта: admin@konsultanty.com.ua</li>
                  <li>Телефон: +380 50 123 4567</li>
                </ul>
                
                <section className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Демонстрація панелі згоди на використання cookie</h2>
                  <p className="mb-4">
                    Натисніть кнопку нижче, щоб побачити, як виглядає панель згоди на використання cookie на нашому сайті:
                  </p>
                  <button
                    className="bg-mipt-pink text-white px-4 py-2 rounded hover:bg-mipt-pink/90 transition-colors"
                    onClick={resetCookieConsent}
                  >
                    Показати панель згоди з cookie
                  </button>

                  {showCookieDemo && (
                    <div className="fixed bottom-0 left-0 w-full bg-[#200632] text-white p-4 flex justify-between items-center flex-col md:flex-row mt-4 z-50">
                      <div className="md:pr-16">
                        <p>
                          Цей веб-сайт використовує файли cookie для покращення вашого досвіду. Детальніше в нашій{" "}
                          <a href="/cookie-policy" className="text-mipt-pink underline">
                            Політиці використання cookies
                          </a>.
                        </p>
                      </div>
                      <div className="flex space-x-2 mt-4 md:mt-0">
                        <button
                          className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white/20 transition-colors"
                          onClick={handleDecline}
                        >
                          Відмовитись
                        </button>
                        <button
                          className="bg-mipt-pink text-white px-4 py-2 rounded hover:bg-mipt-pink/90 transition-colors"
                          onClick={handleAccept}
                        >
                          Я приймаю
                        </button>
                      </div>
                    </div>
                  )}
                </section>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CookiePolicy;

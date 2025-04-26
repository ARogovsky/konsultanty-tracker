import type React from 'react';

const SalaryInfo: React.FC = () => {
  return (
    <section className="bg-mipt-purple-dark py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Скільки заробляє ментор?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-mipt-purple to-mipt-purple-light p-8 text-center shadow-lg">
            <h3 className="mb-4 text-lg font-medium">Початківець ментор</h3>
            <p className="mb-2 text-3xl font-bold">25 000 грн</p>
            <p className="text-sm opacity-80">Робота з 1-2 проєктами</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-mipt-purple to-mipt-pink p-8 text-center shadow-lg">
            <h3 className="mb-4 text-lg font-medium">Досвідчений ментор</h3>
            <p className="mb-2 text-3xl font-bold">50 000 грн</p>
            <p className="text-sm opacity-80">Портфоліо з 3-5 проєктів</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-mipt-purple-light to-mipt-orange p-8 text-center shadow-lg">
            <h3 className="mb-4 text-lg font-medium">Провідний ментор</h3>
            <p className="mb-2 text-3xl font-bold">150 000 грн</p>
            <p className="text-sm opacity-80">Довгострокові контракти з великими компаніями</p>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold">
            Програма школи менторів ГО КОНСУЛЬТАНТИ
          </h3>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-6 flex flex-col md:flex-row md:gap-6">
              <div className="mb-4 md:mb-0 md:w-1/3">
                <h4 className="text-xl font-semibold text-mipt-pink">Обов'язкова частина</h4>
                <p className="mt-2 text-white/80">
                  Базовий курс ментора з основними інструментами та методологіями
                </p>
              </div>

              <div className="mb-4 md:mb-0 md:w-1/3">
                <h4 className="text-xl font-semibold text-mipt-orange">Практика</h4>
                <p className="mt-2 text-white/80">
                  Робота з реальними проєктами під керівництвом експертів
                </p>
              </div>

              <div className="md:w-1/3">
                <h4 className="text-xl font-semibold text-mipt-gray">Сертифікація</h4>
                <p className="mt-2 text-white/80">
                  Захист проєкту та отримання диплому державного зразка
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a href="/contact" className="rounded-lg bg-mipt-pink px-8 py-3 font-medium text-white hover:bg-opacity-90">
                Записатися на курс
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryInfo;

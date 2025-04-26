import type React from 'react';

const SalaryInfo: React.FC = () => {
  return (
    <section className="bg-mipt-purple-dark py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Сколько зарабатывает трекер?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-mipt-purple to-mipt-purple-light p-8 text-center shadow-lg">
            <h3 className="mb-4 text-lg font-medium">Начинающий трекер</h3>
            <p className="mb-2 text-3xl font-bold">от 2500 ₽/час</p>
            <p className="text-sm opacity-80">Работа с 1-2 проектами</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-mipt-purple to-mipt-pink p-8 text-center shadow-lg">
            <h3 className="mb-4 text-lg font-medium">Опытный трекер</h3>
            <p className="mb-2 text-3xl font-bold">от 10 000 ₽/час</p>
            <p className="text-sm opacity-80">Портфель из 3-5 проектов</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-mipt-purple-light to-mipt-orange p-8 text-center shadow-lg">
            <h3 className="mb-4 text-lg font-medium">Ведущий трекер</h3>
            <p className="mb-2 text-3xl font-bold">от 100 000 ₽/мес</p>
            <p className="text-sm opacity-80">Долгосрочные контракты с крупными компаниями</p>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold">
            Программа школы трекеров МФТИ
          </h3>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-6 flex flex-col md:flex-row md:gap-6">
              <div className="mb-4 md:mb-0 md:w-1/3">
                <h4 className="text-xl font-semibold text-mipt-pink">Обязательная часть</h4>
                <p className="mt-2 text-white/80">
                  Базовый курс трекера с основными инструментами и методологиями
                </p>
              </div>

              <div className="mb-4 md:mb-0 md:w-1/3">
                <h4 className="text-xl font-semibold text-mipt-orange">Практика</h4>
                <p className="mt-2 text-white/80">
                  Работа с реальными проектами под руководством экспертов
                </p>
              </div>

              <div className="md:w-1/3">
                <h4 className="text-xl font-semibold text-mipt-gray">Сертификация</h4>
                <p className="mt-2 text-white/80">
                  Защита проекта и получение диплома государственного образца
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="rounded-lg bg-mipt-pink px-8 py-3 font-medium text-white hover:bg-opacity-90">
                Записаться на курс
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryInfo;

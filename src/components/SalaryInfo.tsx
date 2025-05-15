import type React from 'react';

const SalaryInfo: React.FC = () => {
  return (
    <section className="bg-mipt-purple-dark py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Щорічні членські внески
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-mipt-purple to-mipt-purple-light p-8 text-center shadow-lg">
            <h3 className="mb-4 text-lg font-medium">Базовий рівень</h3>
            <p className="mb-2 text-3xl font-bold">5 000 грн</p>
            <p className="text-sm opacity-80">
              <ul className="list-disc pl-5">
                <li>Доступ до інформаційно-консультаційних матеріалів, вебінарів та базових тренінгів.</li>
                <li>Участь у мережевих заходах стартап-шкіл.</li>
              </ul>
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-mipt-purple to-mipt-pink p-8 text-center shadow-lg">
            <h3 className="mb-4 text-lg font-medium">Стандартний рівень</h3>
            <p className="mb-2 text-3xl font-bold">15 000 грн</p>
            <p className="text-sm opacity-80">
              <ul className="list-disc pl-5">
                <li>Індивідуальні консультації з маркетингу, юриспруденції та фінансів.</li>
                <li>Доступ до менторської підтримки та консультацій.</li>
              </ul>
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-mipt-purple-light to-mipt-orange p-8 text-center shadow-lg">
            <h3 className="mb-4 text-lg font-medium">Преміум рівень</h3>
            <p className="mb-2 text-3xl font-bold">30 000 грн</p>
            <p className="text-sm opacity-80">
              <ul className="list-disc pl-5">
                <li>Супровід у  масштабуванні та виході на міжнародні ринки.</li>
                <li>Доступ грантової підтримки до $500 000 через партнерів</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold">
            Що дає членство у ГО "Консультанти
          </h3>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-6 flex flex-col md:flex-row md:gap-6">
              <div className="mb-4 md:mb-0 md:w-1/3">
                <h4 className="text-xl font-semibold text-mipt-pink">ВНЗ</h4>
                <p className="mt-2 text-white/80">
                  Сприяння перетворення інноваційного процесу та економічного відновлення України
                </p>
              </div>

              <div className="mb-4 md:mb-0 md:w-1/3">
                <h4 className="text-xl font-semibold text-mipt-orange">Студентам</h4>
                <p className="mt-2 text-white/80">
                  Робота з реальними стартапами з експертним менторством та інвестиціями
                </p>
              </div>

              <div className="md:w-1/3">
                <h4 className="text-xl font-semibold text-mipt-gray">Професорам</h4>
                <p className="mt-2 text-white/80">
                Сертифікат про підвищення кваліфікації державного зразка
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a href="/contact" className="rounded-lg bg-mipt-pink px-8 py-3 font-medium text-white hover:bg-opacity-90">
                Вступити в членство
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryInfo;
